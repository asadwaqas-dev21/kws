$ddSnippet = @'
            <div className={`nav-dropdown${isDropdownOpen ? " open" : ""}`}>
              <button className={`nav-dropdown-trigger${pathname?.startsWith("/services") ? " active" : ""}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                Services
                <svg className="dd-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu">
                <Link href="/services/clean-water" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(47,143,107,.1)",color:"#2F8F6B"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2s7 7.4 7 12a7 7 0 0 1-14 0c0-4.6 7-12 7-12z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Clean Water</span><span className="nav-dd-sub">Hand pumps & filtration</span></div></Link>
                <Link href="/services/education" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(232,163,61,.1)",color:"#CE8A1F"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10L12 5 2 10l10 5 10-5z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Education</span><span className="nav-dd-sub">Scholarships & supplies</span></div></Link>
                <Link href="/services/health" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(232,93,93,.1)",color:"#E85D5D"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Health & Medical</span><span className="nav-dd-sub">Free camps & aid</span></div></Link>
                <Link href="/services/street-lights" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(206,138,31,.1)",color:"#CE8A1F"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2v6M12 8a4 4 0 0 1 4 4v8H8v-8a4 4 0 0 1 4-4z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Street Lights</span><span className="nav-dd-sub">43+ lights installed</span></div></Link>
                <Link href="/services/welfare" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(20,80,60,.1)",color:"#14503C"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Social Welfare</span><span className="nav-dd-sub">Rations & relief</span></div></Link>
                <Link href="/services/blood-donation" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(192,57,43,.1)",color:"#C0392B"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3s6 4.5 6 10a6 6 0 0 1-12 0c0-5.5 6-10 6-10z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Blood Donation</span><span className="nav-dd-sub">Donor network</span></div></Link>
                <Link href="/services/muqada-boxes" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(142,68,173,.1)",color:"#8E44AD"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 8v13H4V8"/><path d="M2 3h20l-2 5H4z"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Muqada Boxes</span><span className="nav-dd-sub">Community giving</span></div></Link>
                <Link href="/services/sports" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}><div className="nav-dd-icon" style={{background:"rgba(41,128,185,.1)",color:"#2980B9"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/></svg></div><div className="nav-dd-text"><span className="nav-dd-title">Sports & Youth</span><span className="nav-dd-sub">Tournaments & events</span></div></Link>
                <div className="nav-dd-sep" />
                <Link href="/services" className="nav-dd-viewall" onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false); }}>View All Services →</Link>
              </div>
            </div>
'@

$files = @(
  'app\projects\page.tsx',
  'app\team\page.tsx',
  'app\membership\page.tsx',
  'app\legends\page.tsx',
  'app\directory\page.tsx',
  'app\contact\page.tsx',
  'app\services\page.tsx',
  'app\services\[slug]\page.tsx'
)

foreach ($file in $files) {
  $content = Get-Content $file -Raw
  
  # Add isDropdownOpen state (only if not already present)
  if ($content -notmatch 'isDropdownOpen') {
    $content = $content -replace '(\[isMenuOpen, setIsMenuOpen\] = useState\(false\));', "`$1;`n  const [isDropdownOpen, setIsDropdownOpen] = useState(false);"
  }
  
  # Replace the Services Link with dropdown (exact match)
  $pattern1 = '            <Link href="/services" className=\{pathname === "/services" \? "active" : ""\} onClick=\{\(\) => setIsMenuOpen\(false\)\}>Services</Link>'
  $pattern2 = '            <Link href="/services" className=\{pathname\?\.startsWith\("/services"\) \? "active" : ""\} onClick=\{\(\) => setIsMenuOpen\(false\)\}>Services</Link>'
  
  $content = $content -replace $pattern1, $ddSnippet
  $content = $content -replace $pattern2, $ddSnippet
  
  Set-Content $file $content -NoNewline
  Write-Host "Updated $file"
}
