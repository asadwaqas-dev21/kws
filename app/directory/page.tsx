"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Village Directory — sourced from 11-village_directory.xlsx-2026-07-11.csv
const directoryData = [
  { id: 1,   name: "Hafiz Abdul Ghaffar Kamboh",     department: "Punjab Government",              city: "Lahore",         phone: "(+92)300-4178699",  bloodGroup: "A+",  lastDonated: "Oct 07, 2025" },
  { id: 2,   name: "Asad Waqas",                     department: "Student",                        city: "Lahore",         phone: "(+92) 416 871-5643",bloodGroup: "A+",  lastDonated: "Never Donated" },
  { id: 3,   name: "Ahmad Waqas",                     department: "Punjab Government",              city: "Lahore",         phone: "(+92)300-6597024",  bloodGroup: "A+",  lastDonated: "Mar 03, 2025" },
  { id: 4,   name: "Muhammad Sadiq Asim",             department: "Punjab Government",              city: "Lahore",         phone: "(+92)3",            bloodGroup: "",    lastDonated: "" },
  { id: 5,   name: "Faisal Naveed",                   department: "Private Employee",               city: "Lahore",         phone: "(+92)308-2693172",  bloodGroup: "A+",  lastDonated: "" },
  { id: 6,   name: "Abdul Sattar",                    department: "Chemist (Canada)",               city: "Canada",         phone: "(+1)416 871-5643",  bloodGroup: "",    lastDonated: "" },
  { id: 7,   name: "Abu Sufyan",                      department: "Student",                        city: "Khurram",        phone: "(+92)300-7740003",  bloodGroup: "O+",  lastDonated: "" },
  { id: 8,   name: "Abubakar Siddique",               department: "Student",                        city: "Khurram",        phone: "(+92)301-0917253",  bloodGroup: "",    lastDonated: "" },
  { id: 9,   name: "Abdul Ghafoor (Boota)",           department: "Retired Hawaldar (Pak Rangers)", city: "Khurram",        phone: "(+92)306-4278674",  bloodGroup: "",    lastDonated: "Never Donated" },
  { id: 10,  name: "Muhammad Hussain",                department: "Farmer",                         city: "Khurram",        phone: "(+92)305-4059759",  bloodGroup: "",    lastDonated: "Never Donated" },
  { id: 11,  name: "Muhammad Amin Munir Ahmad",       department: "Education Department",           city: "Lahore",         phone: "(+92)300-4208866",  bloodGroup: "",    lastDonated: "" },
  { id: 12,  name: "Abdul Sattar Noor Muhammad",      department: "Education Department (SST)",     city: "Kasur",          phone: "(+92)300-6596591",  bloodGroup: "",    lastDonated: "" },
  { id: 13,  name: "Abdul Sattar Abdul Razzaq",       department: "Education Department",           city: "Khurram",        phone: "(+92)302-3378591",  bloodGroup: "",    lastDonated: "" },
  { id: 14,  name: "Abdul Manan Shabbir",             department: "Private Employee",               city: "Khurram",        phone: "(+92)306-0674769",  bloodGroup: "",    lastDonated: "" },
  { id: 15,  name: "Adnan Javed",                     department: "Private Employee",               city: "Khurram",        phone: "(+92)300-6575346",  bloodGroup: "",    lastDonated: "" },
  { id: 16,  name: "Ahmad Majeed",                    department: "Molvi",                          city: "Khurram",        phone: "(+92)306-7066506",  bloodGroup: "",    lastDonated: "" },
  { id: 17,  name: "Atif Bashir",                     department: "Private Employee",               city: "Lahore",         phone: "(+92)305-4071094",  bloodGroup: "",    lastDonated: "" },
  { id: 18,  name: "Atiq Anwar",                      department: "Punjab Police",                  city: "Lahore",         phone: "(+92)300-8129148",  bloodGroup: "",    lastDonated: "" },
  { id: 19,  name: "Awais Asghar (KJD)",              department: "Farmer",                         city: "Khurram",        phone: "(+92)306-4438830",  bloodGroup: "",    lastDonated: "" },
  { id: 20,  name: "Nadeem Iqbal Nazeer Ahmad",       department: "Farmer",                         city: "Khurram",        phone: "(+92)304-4642394",  bloodGroup: "",    lastDonated: "" },
  { id: 21,  name: "Basharat Safdar (KJD)",           department: "Punjab Police",                  city: "Lahore",         phone: "(+92)308-4726072",  bloodGroup: "",    lastDonated: "" },
  { id: 22,  name: "Bashir Ahmad Nazeer Ahmad",       department: "Mobiles Shop",                   city: "Khurram",        phone: "(+92)333-4937757",  bloodGroup: "",    lastDonated: "" },
  { id: 23,  name: "Tariq Bashir (KJD)",              department: "Mobiles Shop",                   city: "Khurram",        phone: "(+92)306-4665924",  bloodGroup: "",    lastDonated: "" },
  { id: 24,  name: "Badar Munir",                     department: "Private Employee",               city: "Lahore",         phone: "(+92)301-1313117",  bloodGroup: "",    lastDonated: "" },
  { id: 25,  name: "Hammad Barkat",                   department: "Farmer",                         city: "Khurram",        phone: "(+92)300-4824876",  bloodGroup: "",    lastDonated: "" },
  { id: 26,  name: "Faisal Ramzan (China)",           department: "Private Employee",               city: "China",          phone: "(+92)302-3372261",  bloodGroup: "",    lastDonated: "" },
  { id: 27,  name: "Danish Zulfiqar",                 department: "Commission Shop",                city: "Khurram",        phone: "(+92)301-7407274",  bloodGroup: "",    lastDonated: "" },
  { id: 28,  name: "Doctor Arshad (Dholan)",          department: "Pharmacist",                     city: "Dholan",         phone: "(+92)306-8615907",  bloodGroup: "",    lastDonated: "" },
  { id: 29,  name: "Ehsan Ullah Idrees",              department: "Fuel Shop",                      city: "Khurram",        phone: "(+92)304-4777909",  bloodGroup: "",    lastDonated: "" },
  { id: 30,  name: "Farakh Abdullah",                 department: "Private Employee",               city: "Lahore",         phone: "(+92)308-4795729",  bloodGroup: "",    lastDonated: "" },
  { id: 31,  name: "Farakh Sohail Rabani",            department: "Molvi",                          city: "Khaee",          phone: "(+92)305-6578472",  bloodGroup: "",    lastDonated: "" },
  { id: 32,  name: "Ramzan Mansha (KJD)",             department: "Farmer",                         city: "Khurram",        phone: "(+92)301-6836340",  bloodGroup: "",    lastDonated: "" },
  { id: 33,  name: "Gazanfar Javed (USA)",            department: "Software Engineer",              city: "USA",            phone: "(+92)314-4215648",  bloodGroup: "",    lastDonated: "" },
  { id: 34,  name: "Haseeb Khalid (China)",           department: "Doctor",                         city: "China",          phone: "(+92)300-0370395",  bloodGroup: "",    lastDonated: "" },
  { id: 35,  name: "Haseeb Mumtaz",                   department: "Private Employee",               city: "Lahore",         phone: "(+92)325-5469966",  bloodGroup: "",    lastDonated: "" },
  { id: 36,  name: "Imran Noor Muhammad",             department: "Education Department",           city: "Khudian Khas",   phone: "(+92)301-8948655",  bloodGroup: "",    lastDonated: "" },
  { id: 37,  name: "Iqbal Abdul Razzaq",              department: "Private Employee",               city: "Khurram",        phone: "(+92)301-4254862",  bloodGroup: "",    lastDonated: "" },
  { id: 38,  name: "Ismail Akram",                    department: "Bahrain",                        city: "Bahrain",        phone: "(+92)301-5480813",  bloodGroup: "",    lastDonated: "" },
  { id: 39,  name: "Jafar Iqbal (KJD)",              department: "Punjab Police + Farmer",         city: "Khurram",        phone: "(+92)302-6818518",  bloodGroup: "",    lastDonated: "" },
  { id: 40,  name: "Jamil Sadiq Foji",                department: "Education Department",           city: "Khurram",        phone: "(+92)301-6839903",  bloodGroup: "",    lastDonated: "" },
  { id: 41,  name: "Jamil Bashir (Kuwait)",           department: "Private Employee (Kuwait)",      city: "Kuwait",         phone: "(+92)300-2626229",  bloodGroup: "",    lastDonated: "" },
  { id: 42,  name: "Junaid Mansha",                   department: "Farmer",                         city: "Khurram",        phone: "(+92)301-4646214",  bloodGroup: "",    lastDonated: "" },
  { id: 43,  name: "Rizwan Arif",                     department: "Private Employee",               city: "Kasur",          phone: "(+92)328-0471725",  bloodGroup: "",    lastDonated: "" },
  { id: 44,  name: "Latif Ramzan",                    department: "Shop",                           city: "Khurram",        phone: "(+92)301-4961242",  bloodGroup: "",    lastDonated: "" },
  { id: 45,  name: "Sajid Shamaoon",                  department: "Stenographer",                   city: "Kasur",          phone: "(+92)300-8071075",  bloodGroup: "",    lastDonated: "" },
  { id: 46,  name: "Rafiq Ashraf",                    department: "Education Department",           city: "Khurram",        phone: "(+92)300-7559059",  bloodGroup: "",    lastDonated: "" },
  { id: 47,  name: "Amir Ramzan",                     department: "Shop",                           city: "Khudian Khas",   phone: "(+92)301-4355770",  bloodGroup: "",    lastDonated: "" },
  { id: 48,  name: "Awais Mansha",                    department: "Farmer",                         city: "Khurram",        phone: "(+92)300-7875068",  bloodGroup: "",    lastDonated: "" },
  { id: 49,  name: "Ahsan Latif",                     department: "Private Employee",               city: "Lahore",         phone: "(+92)304-1458436",  bloodGroup: "",    lastDonated: "" },
  { id: 50,  name: "Muzammil Shareef",                department: "Education Department",           city: "Khurram",        phone: "(+92)303-4804098",  bloodGroup: "",    lastDonated: "" },
  { id: 51,  name: "Muzammil Hussain",                department: "Private Employee",               city: "Khurram",        phone: "(+92)302-4755494",  bloodGroup: "",    lastDonated: "" },
  { id: 52,  name: "Nadeem Abbas Abdul Rasheed",      department: "Education Department",           city: "Mianwali",       phone: "(+92)302-9382954",  bloodGroup: "",    lastDonated: "" },
  { id: 53,  name: "Qaiser Ramzan",                   department: "Education Department",           city: "Khudian Khas",   phone: "(+92)302-4056256",  bloodGroup: "",    lastDonated: "" },
  { id: 54,  name: "Abdul Ghaffar Salfi Sab",         department: "Imam Masjid",                    city: "Khurram",        phone: "(+92)307-8808454",  bloodGroup: "",    lastDonated: "" },
  { id: 55,  name: "Rahmat Ullah",                    department: "Private Employee (Saudi Arabia)",city: "Saudi Arabia",   phone: "(+92)300-1122753",  bloodGroup: "",    lastDonated: "" },
  { id: 56,  name: "Rafi Ahmad Mehmood",              department: "Education Department",           city: "Khurram",        phone: "(+92)305-4004106",  bloodGroup: "",    lastDonated: "" },
  { id: 57,  name: "Ramzan Noor Muhammad",            department: "Education Department",           city: "Khurram",        phone: "(+92)301-5966322",  bloodGroup: "",    lastDonated: "" },
  { id: 58,  name: "Raqib Bashir",                    department: "Private Employee",               city: "Lahore",         phone: "(+92)302-4264603",  bloodGroup: "",    lastDonated: "" },
  { id: 59,  name: "Abdul Rasheed Bashir",            department: "Wapda",                          city: "Khurram",        phone: "(+92)308-8790948",  bloodGroup: "",    lastDonated: "" },
  { id: 60,  name: "Rizwan Amin",                     department: "Education Department",           city: "Khudian Khas",   phone: "(+92)301-7753537",  bloodGroup: "",    lastDonated: "" },
  { id: 61,  name: "Rizwan Rasheed",                  department: "Farmer",                         city: "Khurram",        phone: "(+92)306-4922599",  bloodGroup: "",    lastDonated: "" },
  { id: 62,  name: "Sabar Sattar",                    department: "Private Employee",               city: "Lahore",         phone: "(+92)307-7136138",  bloodGroup: "",    lastDonated: "" },
  { id: 63,  name: "Sadiq Amin",                      department: "Education Department",           city: "Khurram",        phone: "(+92)301-6141297",  bloodGroup: "",    lastDonated: "" },
  { id: 64,  name: "Naeem Sajid",                     department: "Shop",                           city: "Khurram",        phone: "(+92)305-8717421",  bloodGroup: "",    lastDonated: "" },
  { id: 65,  name: "Shaban Noor Muhammad",            department: "Education Department",           city: "Khurram",        phone: "(+92)303-5851525",  bloodGroup: "",    lastDonated: "" },
  { id: 66,  name: "Ibrahim Sadiq Foji",              department: "Education Department (SST)",     city: "Khurram",        phone: "(+92)306-6813575",  bloodGroup: "",    lastDonated: "" },
  { id: 67,  name: "Tahir Habib",                     department: "Private Employee",               city: "Lahore",         phone: "(+92)306-6325304",  bloodGroup: "",    lastDonated: "" },
  { id: 68,  name: "Talha Zulfiqar",                  department: "Farmer",                         city: "Jamal Pura",     phone: "(+92)302-4632348",  bloodGroup: "",    lastDonated: "" },
  { id: 69,  name: "Tayyab Iqbal",                    department: "Student",                        city: "Lahore",         phone: "(+92)307-8832155",  bloodGroup: "",    lastDonated: "" },
  { id: 70,  name: "Usman Intizar",                   department: "Private Employee",               city: "Khurram",        phone: "(+92)323-7985833",  bloodGroup: "",    lastDonated: "" },
  { id: 71,  name: "Usman Raheel Bhadur",             department: "Private Employee",               city: "Kasur",          phone: "(+92)301-4088013",  bloodGroup: "",    lastDonated: "" },
  { id: 72,  name: "Usman Shabbir",                   department: "Pak Army",                       city: "Lahore",         phone: "(+92)301-4829394",  bloodGroup: "",    lastDonated: "" },
  { id: 73,  name: "Usman Shafiq",                    department: "Private Employee",               city: "Khurram",        phone: "(+92)300-2300844",  bloodGroup: "",    lastDonated: "" },
  { id: 74,  name: "Usman Tufail",                    department: "Government Punjab",              city: "Lahore",         phone: "(+92)300-6595908",  bloodGroup: "",    lastDonated: "" },
  { id: 75,  name: "Waris Safdar (KJD)",              department: "Mobiles Shop",                   city: "Kasur",          phone: "(+92)308-4042167",  bloodGroup: "",    lastDonated: "" },
  { id: 76,  name: "Waseem Asghar",                   department: "Software Engineer",              city: "Lahore",         phone: "(+92)303-4829937",  bloodGroup: "",    lastDonated: "" },
  { id: 77,  name: "Waseem Abbas Abdul Rasheed",      department: "Shop",                           city: "Khurram",        phone: "(+92)304-6873912",  bloodGroup: "",    lastDonated: "" },
  { id: 78,  name: "Yasir Ramzan (UK)",               department: "Student",                        city: "UK",             phone: "(+92)305-4529019",  bloodGroup: "",    lastDonated: "" },
  { id: 79,  name: "Zaman Shafiq",                    department: "Student",                        city: "Khurram",        phone: "(+92)303-4198986",  bloodGroup: "",    lastDonated: "" },
  { id: 80,  name: "Gulzar Anayat",                   department: "Private Employee",               city: "Khurram",        phone: "(+92)300-4590965",  bloodGroup: "",    lastDonated: "" },
  { id: 81,  name: "Hafiz Abid Rabani",               department: "Private Employee",               city: "Lahore",         phone: "(+92)300-4133806",  bloodGroup: "",    lastDonated: "" },
  { id: 82,  name: "Muhammad Mudassir",               department: "Foreign Country",                city: "Foreign Country",phone: "(+92)301-7718111",  bloodGroup: "",    lastDonated: "" },
  { id: 83,  name: "Sabni Iqbal",                     department: "Rescue 1122",                    city: "Gujranwala",     phone: "(+92)300-1416568",  bloodGroup: "",    lastDonated: "" },
  { id: 84,  name: "Mudassar Advocate",               department: "Advocate High Court",            city: "Lahore",         phone: "(+92)300-4258385",  bloodGroup: "",    lastDonated: "" },
  { id: 85,  name: "Hafiz Nasir Bashir",              department: "Molvi",                          city: "Lahore",         phone: "(+92)300-7476915",  bloodGroup: "",    lastDonated: "" },
  { id: 86,  name: "Abdul Ghaffar Bashir",            department: "Retired Pak Army",               city: "Illah Abad",     phone: "(+92)303-4598580",  bloodGroup: "",    lastDonated: "" },
  { id: 87,  name: "Muhammad Boota (Saudi Arabia)",   department: "Private Employee",               city: "Saudi Arabia",   phone: "(+92)304-4129490",  bloodGroup: "",    lastDonated: "" },
  { id: 88,  name: "Adeel",                           department: "Farmer",                         city: "Khurram",        phone: "(+92)301-6827730",  bloodGroup: "",    lastDonated: "" },
  { id: 89,  name: "Ali Haris Shamaoon",              department: "Stenographer",                   city: "Khurram",        phone: "(+92)304-2855168",  bloodGroup: "",    lastDonated: "" },
  { id: 90,  name: "Awais Aslam",                     department: "Labour",                         city: "Khurram",        phone: "(+92)302-9699307",  bloodGroup: "",    lastDonated: "" },
  { id: 91,  name: "Ashfaq Aslam",                    department: "Private Employee",               city: "Khurram",        phone: "(+92)309-2526081",  bloodGroup: "",    lastDonated: "" },
  { id: 92,  name: "Waseem Akram",                    department: "Labour",                         city: "Khurram",        phone: "(+92)300-6583930",  bloodGroup: "",    lastDonated: "" },
  { id: 93,  name: "Mudassir Shabbir",                department: "Private Employee",               city: "Khurram",        phone: "(+92)329-8081329",  bloodGroup: "",    lastDonated: "" },
  { id: 94,  name: "Azeem Akram",                     department: "Shop",                           city: "Khurram",        phone: "(+92)302-4303084",  bloodGroup: "",    lastDonated: "" },
  { id: 95,  name: "Masab Khaleel",                   department: "Farmer",                         city: "Khurram",        phone: "(+92)303-4801651",  bloodGroup: "",    lastDonated: "" },
  { id: 96,  name: "Hamza Asghar",                    department: "Private Employee",               city: "Sargodha",       phone: "(+92)303-4392105",  bloodGroup: "",    lastDonated: "" },
  { id: 97,  name: "Abdullah Zafar",                  department: "Student",                        city: "Khurram",        phone: "(+92)325-4656061",  bloodGroup: "",    lastDonated: "" },
  { id: 98,  name: "Dawood Muhammad Hussain",         department: "Private Employee",               city: "Lahore",         phone: "(+92)300-8001949",  bloodGroup: "",    lastDonated: "" },
  { id: 99,  name: "Nadeem ND",                       department: "Wapda",                          city: "Khurram",        phone: "(+92)300-5203099",  bloodGroup: "",    lastDonated: "" },
  { id: 100, name: "Usman Hanif",                     department: "Car Detailing",                  city: "Lahore",         phone: "(+92)304-4444723",  bloodGroup: "B-",  lastDonated: "Never Donated" },
  { id: 101, name: "Usman Khalid",                    department: "Private Employee",               city: "Lahore",         phone: "(+92)328-4671516",  bloodGroup: "AB+", lastDonated: "Never Donated" },
  { id: 102, name: "Rizwan Hanif",                    department: "Car Detailing",                  city: "Lahore",         phone: "(+92)326-5959748",  bloodGroup: "A+",  lastDonated: "Never Donated" },
  { id: 103, name: "Muhammad Hayat",                  department: "Farmer",                         city: "Khurram",        phone: "(+92)303-4804756",  bloodGroup: "",    lastDonated: "Never Donated" },
  { id: 104, name: "Muhammad Shakeel Ashraf",         department: "Farmer",                         city: "Khurram",        phone: "(+92)307-4341190",  bloodGroup: "",    lastDonated: "" },
  { id: 105, name: "Haji Muhammad Jamil",             department: "Farmer",                         city: "Khurram",        phone: "(+92)301-6822461",  bloodGroup: "",    lastDonated: "" },
  { id: 106, name: "Muhammad Akram Mansha",           department: "Labour",                         city: "Khurram",        phone: "(+92)329-4593536",  bloodGroup: "",    lastDonated: "" },
  { id: 107, name: "Khalid Ameen",                    department: "Farmer",                         city: "Khurram",        phone: "(+92)300-6594937",  bloodGroup: "",    lastDonated: "" },
  { id: 108, name: "Amin Sattar",                     department: "Labour",                         city: "Khurram",        phone: "(+92)301-1023208",  bloodGroup: "",    lastDonated: "" },
  { id: 109, name: "Aqib Babar",                      department: "Farmer",                         city: "Khurram",        phone: "(+92)303-8899370",  bloodGroup: "",    lastDonated: "" },
  { id: 110, name: "Muhammad Asif",                   department: "Labour",                         city: "Khurram",        phone: "(+92)304-6482060",  bloodGroup: "",    lastDonated: "" },
  { id: 111, name: "Zaeem Anwar",                     department: "Private Employee",               city: "Gujranwala",     phone: "(+92)326-1107172",  bloodGroup: "",    lastDonated: "" },
  { id: 112, name: "Bilal Abdul Razzaq",              department: "Farmer",                         city: "Khurram",        phone: "(+92)309-7855238",  bloodGroup: "",    lastDonated: "" },
  { id: 113, name: "Bilal Shamaoon",                  department: "Shopkeeper",                     city: "Khurram",        phone: "(+92)302-4662284",  bloodGroup: "",    lastDonated: "" },
  { id: 114, name: "Rasheed Ashraf",                  department: "Private Employee",               city: "Khurram",        phone: "(+92)306-6486962",  bloodGroup: "",    lastDonated: "" },
  { id: 115, name: "Imran (KJD)",                     department: "Farmer",                         city: "Khurram",        phone: "(+92)306-6823733",  bloodGroup: "",    lastDonated: "" },
  { id: 116, name: "Doctor Tariq (KJD)",              department: "Farmer",                         city: "Khurram",        phone: "(+92)346-6402680",  bloodGroup: "",    lastDonated: "" },
  { id: 117, name: "Hafiz Ibrahim",                   department: "Molvi",                          city: "Khurram",        phone: "(+92)301-3948948",  bloodGroup: "",    lastDonated: "" },
  { id: 118, name: "Haji Muhammad Saleem",            department: "Taxi Driver",                    city: "Khurram",        phone: "(+92)300-7920248",  bloodGroup: "",    lastDonated: "" },
  { id: 119, name: "Hamad Hanif",                     department: "Mobiles Shop",                   city: "Khurram",        phone: "(+92)309-0817663",  bloodGroup: "",    lastDonated: "" },
  { id: 120, name: "Hamza Rafiq",                     department: "Student",                        city: "Khudian Khas",   phone: "(+92)308-6673166",  bloodGroup: "",    lastDonated: "" },
  { id: 121, name: "Decent Hanan",                    department: "Student",                        city: "Lahore",         phone: "(+92)306-4092576",  bloodGroup: "",    lastDonated: "" },
  { id: 122, name: "Haroon Ghafoor",                  department: "Milkman",                        city: "Khurram",        phone: "(+92)306-1922391",  bloodGroup: "",    lastDonated: "" },
  { id: 123, name: "Haroon Sadiq",                    department: "Labour",                         city: "Khurram",        phone: "(+92)305-4725806",  bloodGroup: "",    lastDonated: "" },
  { id: 124, name: "Javed (KJD)",                     department: "Farmer",                         city: "Khurram",        phone: "(+92)302-6815692",  bloodGroup: "",    lastDonated: "" },
  { id: 125, name: "Mubashir Khaleel",                department: "Private Employee",               city: "Saudi Arabia",   phone: "(+92)306-7725679",  bloodGroup: "",    lastDonated: "" },
  { id: 126, name: "Malik Rustam",                    department: "Barber",                         city: "Khurram",        phone: "(+92)302-9357983",  bloodGroup: "",    lastDonated: "" },
  { id: 127, name: "Muzammil Shabbir",                department: "Rickshaw Driver",                city: "Khurram",        phone: "(+92)328-7273946",  bloodGroup: "",    lastDonated: "" },
  { id: 128, name: "Nasir Anayat Tori",               department: "Labour",                         city: "Khurram",        phone: "(+92)308-4712817",  bloodGroup: "",    lastDonated: "" },
  { id: 129, name: "Shaban Mansha",                   department: "Labour",                         city: "Khurram",        phone: "(+92)309-0564494",  bloodGroup: "",    lastDonated: "" },
  { id: 130, name: "Shahid Rafi",                     department: "Lahore",                         city: "Khurram",        phone: "(+92)307-4927107",  bloodGroup: "",    lastDonated: "" },
  { id: 131, name: "Tanveer (KJD)",                   department: "Wapda",                          city: "Khurram",        phone: "(+92)306-9794584",  bloodGroup: "",    lastDonated: "" },
  { id: 132, name: "Tayyab Rafiq",                    department: "Private Employee",               city: "Lahore",         phone: "(+92)307-8832155",  bloodGroup: "",    lastDonated: "" },
  { id: 133, name: "Tayyab Saleem",                   department: "Car Detailing",                  city: "Lahore",         phone: "(+92)325-4532466",  bloodGroup: "AB-", lastDonated: "Never Donated" },
  { id: 134, name: "Usman Zubair",                    department: "Labour",                         city: "Khurram",        phone: "(+92)304-4202830",  bloodGroup: "",    lastDonated: "" },
  { id: 135, name: "Waqas Abdullah",                  department: "Car Detailing",                  city: "Khurram",        phone: "(+92)307-5540724",  bloodGroup: "",    lastDonated: "" },
  { id: 136, name: "Waseem Anwar",                    department: "Car Detailing",                  city: "Islamabad",      phone: "(+92)326-4559753",  bloodGroup: "",    lastDonated: "" },
];

export default function Directory() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredData = directoryData.filter((person) => {
    const q = searchQuery.toLowerCase();
    return (
      person.name.toLowerCase().includes(q) ||
      person.department.toLowerCase().includes(q) ||
      person.city.toLowerCase().includes(q) ||
      person.bloodGroup.toLowerCase().includes(q) ||
      person.phone.includes(searchQuery)
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="wrap">
          <div className="tb-info">
            <a href="mailto:kwsociety2014@gmail.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              kwsociety2014@gmail.com
            </a>
            <a href="tel:+923334178699">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +92 333 4178 699
            </a>
            <a href="#" className="ci-loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Khurram, Kasur, Pakistan
            </a>
          </div>
          <div className="tb-social">
            <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
            </a>
            <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header id="header" className={isScrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="Khurram Welfare Society home">
            <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
            <span className="brand-text">
              <span className="brand-name">Khurram Welfare Society</span>
              <span className="brand-sub">Serving Humanity Since 2014</span>
            </span>
          </Link>
          <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
            <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/projects" className={pathname === "/projects" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/team" className={pathname === "/team" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/sports" className={pathname === "/sports" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Sports</Link>
            <Link href="/legends" className={pathname === "/legends" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Legends</Link>
            <Link href="/directory" className={pathname === "/directory" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Directory</Link>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="nav-cta">
            <Link href="/membership" className="btn btn-amber">Apply for membership <span className="arrow">→</span></Link>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* DIRECTORY PAGE CONTENT */}
      <main className="dir-page">
        <div className="dir-hero reveal in">
          <div className="wrap center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Community Network</span>
            <h1 className="h-sec">Village <em>Directory.</em></h1>
            <p className="lead">Stay connected with the people of Khurram Hithar. Find contact information, blood groups, and professional roles within our community.</p>
            
            <div className="dir-search">
              <div className="dir-search-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input 
                  type="text" 
                  placeholder="Search by name, blood group, or phone..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>        <div className="dir-content">
            <div className="dir-table-wrap reveal in">
              <table className="dir-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Department / Profession</th>
                    <th>Current City</th>
                    <th>Contact Number</th>
                    <th>Blood Group</th>
                    <th>Last Donated</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((person) => (
                      <tr key={person.id}>
                        <td><span className="dt-sr">{person.id}</span></td>
                        <td>
                          <div className="dt-name-col">
                            <div className="dir-avatar">{person.name.charAt(0)}</div>
                            <span className="dt-name">{person.name}</span>
                          </div>
                        </td>
                        <td><span className="dt-role">{person.department || '—'}</span></td>
                        <td><span className="dt-city">{person.city || '—'}</span></td>
                        <td>
                          <a href={`tel:${person.phone.replace(/\s+/g, '')}`} className="dt-phone">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            {person.phone}
                          </a>
                        </td>
                        <td>
                          {person.bloodGroup
                            ? <span className={`dt-blood bg-${person.bloodGroup.replace(/[+-]/g, '')}`}>{person.bloodGroup}</span>
                            : <span className="dt-blood-na">—</span>}
                        </td>
                        <td>
                          {person.lastDonated
                            ? <span className={person.lastDonated === 'Never Donated' ? 'dt-donated-never' : 'dt-donated'}>{person.lastDonated}</span>
                            : <span className="dt-donated-na">—</span>}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7}>
                        <div className="dir-empty">
                          <h3>No results found</h3>
                          <p>We couldn't find anyone matching "{searchQuery}".</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <Link href="/" className="brand">
                <img src="/kws.png" alt="KWS Logo" className="brand-badge" />
                <span className="brand-text">
                  <span className="brand-name" style={{ color: '#fff' }}>Khurram Welfare Society</span>
                  <span className="brand-sub">Serving Humanity Since 2014</span>
                </span>
              </Link>
              <p>Serving humanity without difference of religion, creed or caste.</p>
              <div className="foot-social">
                <a href="https://www.facebook.com/KWSociety/" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg></a>
                <a href="https://www.youtube.com/@aGhaffar702" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" /></svg></a>
              </div>
            </div>
            <div className="foot-col"><h4>Our Work</h4><Link href="/#focus">Clean Water</Link><Link href="/#focus">Education</Link><Link href="/#focus">Health</Link><Link href="/#focus">Welfare</Link><Link href="/#focus">Blood Donation</Link></div>
            <div className="foot-col"><h4>Get Involved</h4><Link href="/#causes">Donate Now</Link><Link href="/#contact">Volunteer</Link><Link href="/#contact">Become a Member</Link><Link href="/#contact">Contact Us</Link></div>
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: '12px' }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
          </div>
          <div className="foot-bot">
            <div>&copy; {new Date().getFullYear()} Khurram Welfare Society. All rights reserved.</div>
            <div className="fb-links"><Link href="/">Privacy Policy</Link><Link href="/">Terms of Service</Link></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
