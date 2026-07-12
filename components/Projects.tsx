"use client";

import { motion } from "framer-motion";


const projects=[

{
title:"Hospital Blockchain Management System",

category:"Blockchain + Healthcare + Cyber Security",

description:
"Secure healthcare information management platform using blockchain technology to improve patient data privacy, integrity and transparent medical record management.",

tech:[
"Blockchain",
"Smart Contracts",
"Healthcare Systems",
"Cyber Security",
"Web3",
"Database Security"
]

},

{
title:"AI Mobile Money Fraud Detection System",
category:"Artificial Intelligence + Cyber Security",
description:
"AI based system designed to detect and prevent mobile money fraud using machine learning techniques.",
tech:[
"Python",
"Machine Learning",
"Data Analysis",
"Cyber Security"
]
},


{
title:"WasteSort AI",
category:"AI + Computer Vision",
description:
"AI-powered waste classification system using computer vision for automated waste sorting.",
tech:[
"Python",
"AI",
"Computer Vision"
]
},



{
title:"TryHackMe Security Writeups",
category:"Penetration Testing",
description:
"Collection of cybersecurity labs covering web security, privilege escalation, networking and SOC investigations.",
tech:[
"Linux",
"Nmap",
"Burp Suite",
"Metasploit"
]
},



{
title:"SOC Analyst Level 1 Labs",
category:"Security Operations Center",
description:
"Security monitoring and incident response practice using SIEM investigation techniques.",
tech:[
"Splunk",
"Log Analysis",
"Threat Detection"
]
},



{
title:"PortSwigger Web Security Labs",
category:"Web Application Security",
description:
"Practical vulnerability research including XSS, SQL Injection, IDOR and authentication bypass.",
tech:[
"Burp Suite",
"Web Security",
"OWASP"
]
},



{
title:"HackerOne Bug Bounty Research",
category:"Bug Bounty",
description:
"Security research projects focused on vulnerability discovery and responsible disclosure.",
tech:[
"Recon",
"Web Testing",
"Vulnerability Assessment"
]
}


];



export default function Projects(){


return(

<section id="projects" className="py-20">


<h2 className="text-4xl font-bold mb-12">
Projects
</h2>



<div className="grid md:grid-cols-2 gap-8">


{
projects.map((project,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.03
}}

className="
border
rounded-2xl
p-6
"

>


<h3 className="text-2xl font-bold">

{project.title}

</h3>


<p className="mt-2 text-sm">

{project.category}

</p>


<p className="mt-4">

{project.description}

</p>



<div className="flex flex-wrap gap-2 mt-5">


{
project.tech.map((t,i)=>(

<span

key={i}

className="
border
px-3
py-1
rounded-full
text-sm
"

>

{t}

</span>

))

}


</div>



<button className="mt-6 flex gap-2 items-center">
<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.74.11 3.03.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>
</svg>
GitHub
</button>

</motion.div>


))

}


</div>


</section>

)

}
