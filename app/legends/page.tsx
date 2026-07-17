"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Legend = {
  name: string;
  image: string;
  role: string;
  village: string;
  lifespan: string;
  cast: string;
  bio: string[];
};

const legends: Legend[] = [
  {
    name: "چوہدری محمد یاسین نور محمد",
    image: "/legends/Ch Muhammad Yaseen.jpg",
    role: "فیکٹری ورکر و کاشتکار",
    village: "خرم ہٹھاڑ",
    lifespan: "۴ دسمبر ۱۹۷۸ — ۴ جولائی ۲۰۲۰",
    cast: "کمبوہ",
    bio: [
      "محمد یاسین ایک شریف النفس اور نرم دل انسان تھے، جو اپنی دیانت داری، دانائی اور خدمتِ خلق کی وجہ سے خرم ہٹھاڑ میں بہت محترم تھے۔ انہوں نے زندگی کا بیشتر حصہ زراعت کے میدان میں گزارا، جہاں ان کی محنت اور ایمانداری نے انہیں سب کا محبوب بنا دیا۔",
      "بطور ایک فعال اور بااثر فرد، انہوں نے کمبوہ سوسائٹی کی ترقی میں اہم کردار ادا کیا اور گاؤں اور اس کے لوگوں کی بہتری کے لیے اپنا وقت اور محنت پیش کی۔ ان کی مہربانی، قیادت اور خلوص کی میراث آج بھی خرم ہٹھاڑ کے لوگوں کے لیے مشعلِ راہ ہے۔ وہ ہمیشہ اپنے دور کی سب سے قابلِ احترام اور یادگار شخصیات میں شمار کیے جائیں گے۔",
    ],
  },
  {
    name: "بابا جی اللہ دتہ",
    image: "/legends/Baba g Allah Ditta.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی اللہ دتہ خرم ہٹھاڑ کے ان بزرگوں میں سے تھے جن کی سادگی، دیانت اور نیک نیتی گاؤں والوں کے لیے مثال بنی۔ وہ ہمیشہ دوسروں کی مدد اور بھلائی کے کاموں میں آگے رہتے۔",
      "ان کی خاموش خدمت اور بزرگوں والا رویہ کمیونٹی میں احترام کا باعث بنا۔ آج بھی ان کا نام خرم ہٹھاڑ کی تاریخ اور یادوں میں زندہ ہے۔",
    ],
  },
  {
    name: "بابا جی بشیر احمد",
    image: "/legends/Baba g Bashir Ahmad.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی بشیر احمد اپنی خوش اخلاقی، رواداری اور کمیونٹی سے گہرے لگاؤ کے لیے جانے جاتے تھے۔ انہوں نے زندگی بھر لوگوں کے درمیان محبت اور اتحاد کو فروغ دیا۔",
      "ان کی نیک خدمات اور نیک نامی خرم ہٹھاڑ کے لیے ایک قیمتی ورثہ ہیں، جو آنے والی نسلوں کو خدمت اور خلوص کی راہ دکھاتے رہیں گے۔",
    ],
  },
  {
    name: "بابا جی کرم الٰہی",
    image: "/legends/Baba g karam Ilahi.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی کرم الٰہی ایک نیک اور پرخلوص شخصیت تھے جنہوں نے اپنی زندگی خدمت، محنت اور ایمانداری سے بسر کی۔ گاؤں کے لوگ ان کی شفقت اور رہنمائی کو ہمیشہ یاد رکھتے ہیں۔",
      "ان کا کردار خرم ہٹھاڑ کی سماجی زندگی میں روشنی کا سبب رہا۔ ان کی یاد آج بھی کمیونٹی کے دلوں میں زندہ ہے۔",
    ],
  },
  {
    name: "بابا جی مختار احمد",
    image: "/legends/Baba g Mukhtar Ahmad.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی مختار احمد اپنی ذمہ داری، حوصلہ مندی اور کمیونٹی کے معاملات میں بھرپور کردار کے لیے مشہور تھے۔ وہ ہمیشہ گاؤں کی بہتری اور لوگوں کے مسائل حل کرنے میں پیش پیش رہتے۔",
      "ان کی محنت اور وفاداری نے انہیں خرم ہٹھاڑ کی قابلِ فخر شخصیات میں شامل کر دیا۔ ان کا ورثہ آنے والے وقتوں کے لیے مشعلِ راہ ہے۔",
    ],
  },
  {
    name: "بابا جی اشرف ممبر",
    image: "/legends/Baba g Ashraf Member.jpg",
    role: "کمیونٹی ممبر",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی اشرف کمیونٹی کے فعال ممبر تھے جنہوں نے اجتماعی کاموں اور گاؤں کی ترقی میں اہم حصہ لیا۔ ان کی موجودگی ہمیشہ اجتماعیت اور تعاون کا پیغام دیتی تھی۔",
      "ان کی خدمات اور نیک نیت خرم ہٹھاڑ کی اجتماعی زندگی کا حصہ بن چکی ہیں۔ وہ ہمیشہ ایک باعمل اور مخلص شخصیت کے طور پر یاد کیے جائیں گے۔",
    ],
  },
  {
    name: "بابا جی محمد انور",
    image: "/legends/Baba g Muhammad Anwar.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی محمد انور اپنی دیانت، بردباری اور لوگوں سے محبت کی وجہ سے خرم ہٹھاڑ میں عزت کی نگاہ سے دیکھے جاتے تھے۔ انہوں نے ہمیشہ امن اور بھائی چارے کو ترجیح دی۔",
      "ان کی سادہ زندگی اور نیک اعمال آج بھی نوجوان نسل کے لیے سبق ہیں۔ ان کا نام گاؤں کی یادگار شخصیات میں محفوظ ہے۔",
    ],
  },
  {
    name: "بابا جی حاجی محمد انور",
    image: "/legends/Baba g Haji Muhammad Anwar.jpg",
    role: "حاجی و بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی حاجی محمد انور ایک متقی اور نیک انسان تھے جنہوں نے دینی اور دنیاوی معاملات میں توازن قائم رکھا۔ حج کی سعادت کے ساتھ ان کی زندگی خدمت اور اخلاص کی مثال تھی۔",
      "خرم ہٹھاڑ میں ان کی عزت اور محبت آج بھی قائم ہے۔ ان کی یاد کمیونٹی کے لیے باعثِ افتخار ہے۔",
    ],
  },
  {
    name: "بابا انور",
    image: "/legends/Baba Anwar.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا انور خرم ہٹھاڑ کے ان بزرگوں میں سے تھے جنہوں نے اپنی زندگی کو سادگی، محنت اور لوگوں کی مدد سے آراستہ کیا۔ ان کی شخصیت میں نرم مزاجی اور ہمدردی نمایاں تھی۔",
      "ان کی نیک یادیں گاؤں والوں کے دلوں میں محفوظ ہیں۔ وہ ہمیشہ ایک محترم اور عزیز شخصیت کے طور پر یاد رہیں گے۔",
    ],
  },
  {
    name: "چوہدری رمضان ارشد",
    image: "/legends/Ch Ramzan Arshad.jpg",
    role: "سماجی رہنما",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "چوہدری رمضان ارشد اپنی قیادت، فراخدلی اور کمیونٹی کے معاملات میں فعال کردار کے لیے جانے جاتے ہیں۔ انہوں نے ہمیشہ گاؤں کی ترقی اور لوگوں کے اتحاد کو فوقیت دی۔",
      "ان کی خدمات اور رہنمائی خرم ہٹھاڑ کی سماجی زندگی کا اہم حصہ ہیں۔ ان کا کردار آنے والی نسلوں کے لیے نمونہ ہے۔",
    ],
  },
  {
    name: "چوہدری حنیف حوالدار",
    image: "/legends/Ch Hanif Hawaldar.jpg",
    role: "حوالدار",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "چوہدری حنیف حوالدار نظم و ضبط، فرض شناسی اور خدمتِ قوم کی علامت تھے۔ فوجی روایت کے ساتھ انہوں نے کمیونٹی میں بھی عزت اور اعتماد حاصل کیا۔",
      "ان کی جرأت اور ذمہ داری کا جذبہ خرم ہٹھاڑ کے لیے باعثِ فخر ہے۔ ان کا نام گاؤں کی قابلِ احترام شخصیات میں زندہ ہے۔",
    ],
  },
  {
    name: "سلمان خالد",
    image: "/legends/Salman Khalid.jpg",
    role: "نوجوان رہنما",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "سلمان خالد اپنی ہمت، جذبۂ خدمت اور کمیونٹی سے وابستگی کے لیے جانے جاتے ہیں۔ انہوں نے نوجوان نسل کے لیے مثبت سوچ اور عمل کی مثال قائم کی۔",
      "ان کی کاوشیں خرم ہٹھاڑ کی ترقی اور بہتری میں مددگار ثابت ہوئی ہیں۔ وہ کمیونٹی کے لیے ایک روشن نام ہیں۔",
    ],
  },
  {
    name: "بابا جی محمد حنیف",
    image: "/legends/Baba g Muhammad Hanif.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی محمد حنیف ایک مخلص اور محنتی شخصیت تھے جنہوں نے زندگی بھر ایمانداری اور خدمت کو اپنا شعار بنایا۔ گاؤں والے ان کی رہنمائی اور مشوروں کا احترام کرتے تھے۔",
      "ان کی نیک میراث خرم ہٹھاڑ کی تاریخ کا حصہ ہے۔ وہ ہمیشہ ایک قابلِ احترام بزرگ کے طور پر یاد کیے جائیں گے۔",
    ],
  },
  {
    name: "بابا جی ابراہیم",
    image: "/legends/Baba g Ibrahim.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی ابراہیم اپنی خاموش خدمت، صبر اور نیک نیتی کے لیے مشہور تھے۔ انہوں نے ہمیشہ لوگوں کے درمیان صلح اور محبت کو فروغ دیا۔",
      "خرم ہٹھاڑ میں ان کی یاد آج بھی تازہ ہے۔ ان کا کردار کمیونٹی کے لیے رہنمائی کا باعث ہے۔",
    ],
  },
  {
    name: "بابا جی ہدایت اللہ",
    image: "/legends/Baba g Hadayat ullah.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی ہدایت اللہ ایک روشن خیال اور نیک دل بزرگ تھے جنہوں نے علم، اخلاق اور خدمت کو اپنی زندگی کا حصہ بنایا۔ ان کی باتوں میں حکمت اور خلوص ہوتا تھا۔",
      "ان کی شخصیت خرم ہٹھاڑ کے لوگوں کے لیے مشعلِ راہ رہی۔ ان کا نام ہمیشہ احترام سے لیا جائے گا۔",
    ],
  },
  {
    name: "بابا جی حنیف",
    image: "/legends/Baba g Hanif.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی حنیف اپنی سادگی، دیانت اور کمیونٹی سے محبت کی وجہ سے یاد کیے جاتے ہیں۔ انہوں نے ہمیشہ دوسروں کی مدد کو اپنی خوشی سمجھا۔",
      "ان کی نیک یادیں خرم ہٹھاڑ کی اجتماعی زندگی کا قیمتی سرمایہ ہیں۔ وہ ایک عزیز اور محترم شخصیت کے طور پر زندہ رہیں گے۔",
    ],
  },
  {
    name: "بابا جی منیر احمد",
    image: "/legends/baba g Munir Ahmad.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی منیر احمد ایک باعمل اور پرخلوص انسان تھے جنہوں نے گاؤں کی بہتری اور لوگوں کے مسائل حل کرنے میں اہم کردار ادا کیا۔ ان کی شخصیت میں عزم اور ہمدردی نمایاں تھی۔",
      "ان کی خدمات خرم ہٹھاڑ کے لیے باعثِ فخر ہیں۔ ان کا ورثہ آنے والی نسلوں کے لیے سبق ہے۔",
    ],
  },
  {
    name: "چوہدری عبداللہ ساجد",
    image: "/legends/Ch Abdullah Sajid.jpg",
    role: "سماجی رہنما",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "چوہدری عبداللہ ساجد اپنی فراخدلی، قیادت اور کمیونٹی کے لیے فعال کردار کے لیے جانے جاتے ہیں۔ انہوں نے ہمیشہ اتحاد اور ترقی کے کاموں میں حصہ لیا۔",
      "ان کی کاوشیں خرم ہٹھاڑ کی سماجی بہتری میں معاون ثابت ہوئی ہیں۔ وہ ایک قابلِ احترام رہنما کے طور پر یاد رکھے جاتے ہیں۔",
    ],
  },
  {
    name: "بابا جی محمد صدیق",
    image: "/legends/Baba g Muhammad Siddique.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی محمد صدیق اپنی ایمانداری، نرم مزاجی اور خدمتِ خلق کے جذبے کے لیے مشہور تھے۔ انہوں نے زندگی کو سادگی اور نیک اعمال سے آراستہ کیا۔",
      "خرم ہٹھاڑ میں ان کی عزت آج بھی قائم ہے۔ ان کی یاد کمیونٹی کے دلوں میں زندہ ہے۔",
    ],
  },
  {
    name: "چوہدری برکت ممبر",
    image: "/legends/Ch Barkat Member.jpg",
    role: "کمیونٹی ممبر",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "چوہدری برکت کمیونٹی کے فعال ممبر تھے جنہوں نے اجتماعی معاملات اور گاؤں کی ترقی میں بھرپور کردار ادا کیا۔ ان کی موجودگی ہمیشہ تعاون اور بھائی چارے کا پیغام دیتی تھی۔",
      "ان کی خدمات خرم ہٹھاڑ کی اجتماعی زندگی کا حصہ بن چکی ہیں۔ وہ ایک مخلص اور باعمل شخصیت کے طور پر یاد کیے جائیں گے۔",
    ],
  },
  {
    name: "بابا جی حبیب",
    image: "/legends/Baba g Habib.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی حبیب اپنی شفقت، خوش اخلاقی اور لوگوں سے محبت کی وجہ سے خرم ہٹھاڑ میں بہت پسند کیے جاتے تھے۔ وہ ہمیشہ دوسروں کی خوشی میں شریک رہتے۔",
      "ان کی نیک یاد آج بھی گاؤں والوں کے دلوں میں تازہ ہے۔ وہ ایک پیارے اور محترم بزرگ کے طور پر زندہ رہیں گے۔",
    ],
  },
  {
    name: "بابا جی محمد منشآ",
    image: "/legends/Baba g Muhammad Mansha.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی محمد منشآ ایک محنتی اور ذمہ دار شخصیت تھے جنہوں نے اپنی زندگی ایمانداری اور خدمت سے گزاری۔ گاؤں کے لوگ ان کی رہنمائی کا احترام کرتے تھے۔",
      "ان کا کردار خرم ہٹھاڑ کی تاریخ میں محفوظ ہے۔ وہ ہمیشہ ایک قابلِ فخر شخصیت کے طور پر یاد کیے جائیں گے۔",
    ],
  },
  {
    name: "بابا جی امام دین",
    image: "/legends/Baba g Imam din.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی امام دین اپنی دیانت، صبر اور کمیونٹی سے وابستگی کے لیے جانے جاتے تھے۔ انہوں نے ہمیشہ امن اور بھلائی کے کاموں کو ترجیح دی۔",
      "ان کی نیک میراث خرم ہٹھاڑ کے لوگوں کے لیے مشعلِ راہ ہے۔ ان کا نام احترام سے لیا جاتا رہے گا۔",
    ],
  },
  {
    name: "بابا جی یونس",
    image: "/legends/Baba g Younis.jpg",
    role: "بزرگانِ قوم",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "بابا جی یونس ایک نرم دل اور پرخلوص بزرگ تھے جنہوں نے زندگی بھر لوگوں کی مدد اور گاؤں کی بہتری کو اہمیت دی۔ ان کی شخصیت میں بردباری اور ایمانداری نمایاں تھی۔",
      "خرم ہٹھاڑ میں ان کی یاد آج بھی زندہ ہے۔ وہ کمیونٹی کے لیے ایک عزیز نام ہیں۔",
    ],
  },
  {
    name: "محمد بوٹا حنیف",
    image: "/legends/Muhammad Boota Hanif.jpg",
    role: "سماجی شخصیت",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "محمد بوٹا حنیف اپنی محنت، دیانت اور کمیونٹی سے محبت کے لیے جانے جاتے ہیں۔ انہوں نے ہمیشہ مثبت کردار ادا کیا اور لوگوں کے درمیان اتحاد کو فروغ دیا۔",
      "ان کی خدمات خرم ہٹھاڑ کی سماجی زندگی کا قیمتی حصہ ہیں۔ وہ ایک محترم اور یادگار شخصیت کے طور پر یاد رکھے جاتے ہیں۔",
    ],
  },
  {
    name: "چوہدری عبدالرشید تھانیدار",
    image: "/legends/Chuadhry Abdul Rasheed Thanedar.jpg",
    role: "سماجی شخصیت",
    village: "خرم ہٹھاڑ",
    lifespan: "یادگار شخصیت",
    cast: "کمبوہ",
    bio: [
      "چوہدری عبدالرشید تھانیدار اپنی فرض شناسی، جرأت اور قانون کی پاسداری کے ساتھ ساتھ سماجی خدمات کے حوالے سے نمایاں تھے۔ ایک بااثر شخصیت ہونے کے ناطے انہوں نے ہمیشہ انصاف اور لوگوں کی بھلائی کو ترجیح دی۔",
      "ان کا رعب دار مگر ہمدردانہ انداز خرم ہٹھاڑ کے لوگوں کے لیے باعثِ فخر اور کشش کا باعث تھا۔ ان کی یاد اور خدمات ہمیشہ عزت کے ساتھ محفوظ رہیں گی۔",
    ],
  },
];

export default function Legends() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
              <span className="brand-sub">Serving Humanity Since 2012</span>
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

      {/* LEGENDS PAGE CONTENT */}
      <main className="legends-page" dir="rtl" lang="ur">
        <div className="legends-hero reveal in">
          <div className="wrap center">
            <span className="eyebrow" style={{ justifyContent: "center" }}>ہمارے ہیرو</span>
            <h1 className="h-sec">خرم ہٹھاڑ کے <em>عظیم لوگ۔</em></h1>
            <p className="lead">ان عظیم شخصیات کو خراجِ تحسین جو اپنی نیک خدمات، قیادت اور عمر بھر کی لگن سے ہماری کمیونٹی پر ناقابلِ فراموش نقوش چھوڑ گئے۔</p>
          </div>
        </div>

        <div className="legend-showcase">
          <div className="wrap legends-list">
            {legends.map((legend) => (
              <div className="legend-split reveal in" key={legend.image}>
                <div className="ls-left">
                  <div className="ls-image-wrap">
                    <img src={legend.image} alt={legend.name} />
                    <div className="ls-deco"></div>
                  </div>
                </div>
                <div className="ls-right">
                  <h2 className="ls-name">{legend.name}</h2>

                  <div className="ls-meta">
                    <div className="lsm-item">
                      <span className="lsm-label">کردار</span>
                      <span className="lsm-val">{legend.role}</span>
                    </div>
                    <div className="lsm-item">
                      <span className="lsm-label">گاؤں</span>
                      <span className="lsm-val">{legend.village}</span>
                    </div>
                    <div className="lsm-item">
                      <span className="lsm-label">حیات</span>
                      <span className="lsm-val">{legend.lifespan}</span>
                    </div>
                    <div className="lsm-item">
                      <span className="lsm-label">ذات</span>
                      <span className="lsm-val">{legend.cast}</span>
                    </div>
                  </div>

                  <div className="ls-bio">
                    <h3 className="ls-bio-title">سوانحِ عمری</h3>
                    <div className="ls-bio-text">
                      {legend.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
                  <span className="brand-name" style={{ color: "#fff" }}>Khurram Welfare Society</span>
                  <span className="brand-sub">Serving Humanity Since 2012</span>
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
            <div className="foot-col"><h4>Contact</h4><p>Village Khurram Hithar,<br />Tehsil &amp; Dist. Kasur,<br />Pakistan</p><p style={{ marginTop: "12px" }}><a href="tel:+923334178699">+92 333 4178 699</a><br /><a href="mailto:kwsociety2014@gmail.com">kwsociety2014@gmail.com</a></p></div>
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
