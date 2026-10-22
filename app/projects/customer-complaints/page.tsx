import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Customer Complaint Analytics | MASON Portfolio", description: "A customer experience analytics case study." };
export default function ProjectPage() {
  const steps = ["Focus: analyze customer complaint data to identify patterns and reporting opportunities.","Detailed dataset, methodology, dashboard, and quantified outcomes will be added after source verification.","No performance claims or dataset counts are published without supporting evidence."];
  const tags = ["Customer Experience","Analytics","Reporting"];
  return <main style={{minHeight:"100vh",background:"#F7F5EE",color:"#292744",padding:"clamp(24px,6vw,88px)",fontFamily:"Arial,sans-serif"}}>
    <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}>
      <Link href="/" style={{fontWeight:800,letterSpacing:3,textDecoration:"none",color:"inherit",fontSize:24}}>MASON.</Link>
      <Link href="/#work" style={{color:"inherit",textUnderlineOffset:5}}>← All projects</Link>
    </header>
    <article style={{maxWidth:980,margin:"100px auto 0"}}>
      <p style={{letterSpacing:4,fontSize:13}}>PROJECT CASE STUDY / 2026</p>
      <h1 style={{fontSize:"clamp(40px,7vw,82px)",lineHeight:1.04,letterSpacing:"-0.05em",margin:"20px 0 24px"}}>Customer Complaint Analytics</h1>
      <p style={{fontSize:"clamp(19px,2.4vw,26px)",lineHeight:1.55,maxWidth:740}}>A customer experience analytics case study.</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:10,margin:"35px 0 60px"}}>{tags.map(tag=><span key={tag} style={{border:"1px solid #C7C0D9",borderRadius:40,padding:"10px 16px",fontSize:14}}>{tag}</span>)}</div>
      <h2 style={{fontSize:30}}>Project overview</h2>
      <ul style={{fontSize:18,lineHeight:1.85,paddingLeft:24}}>{steps.map(step=><li key={step} style={{marginBottom:16}}>{step}</li>)}</ul>
      <p style={{marginTop:55,color:"#625C79"}}>Further supporting visuals and verified outcomes will be published as they become available.</p>
      <Link href="/#work" style={{display:"inline-block",marginTop:36,color:"#292744",fontWeight:700}}>← Return to portfolio</Link>
    </article>
  </main>;
}
