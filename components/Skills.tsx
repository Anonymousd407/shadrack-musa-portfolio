"use client";

import { motion } from "framer-motion";
import {
ShieldCheck,
Code2,
Brain,
Network,
Terminal,
Database
} from "lucide-react";


const skills = [

{
icon: ShieldCheck,
title:"Healthcare Blockchain Security",
items:[
"Blockchain Architecture",
"Smart Contract Security",
"Healthcare Data Privacy",
"Electronic Health Records (EHR)",
"Decentralized Identity Management",
"Data Integrity & Audit Trails",
"Secure Patient Data Exchange"
]
},

{
icon: ShieldCheck,
title:"Cyber Security",
items:[
"VAPT",
"Advanced Penetration Testing",
"Active Directory Exploitation",
"Digital Forensics",
"Malware Analysis",
"Burp Suite",
"Metasploit Framework",
"SIEM & Splunk"
]
},

{
icon: Network,
title:"Network Security",
items:[
"Network Architecture",
"Nmap",
"Wireshark",
"VPN",
"Firewall Security",
"Traffic Analysis"
]
},


{
icon: Code2,
title:"Software Engineering",
items:[
"React / Next.js",
"TypeScript",
"Node.js",
"API Development",
"Database Security"
]
},


{
icon: Brain,
title:"Artificial Intelligence",
items:[
"Machine Learning",
"Computer Vision",
"Data Analysis",
"AI Security"
]
},


{
icon: Terminal,
title:"DevSecOps",
items:[
"Docker",
"CI/CD Security",
"GitHub Security",
"Linux Administration"
]
},


{
icon: Database,
title:"Programming",
items:[
"Python",
"JavaScript",
"SQL",
"Bash Scripting"
]
}


];


export default function Skills(){

return(

<section id="skills" className="py-20">


<h2 className="text-4xl font-bold mb-12">
Technical Skills
</h2>



<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


{
skills.map((skill,index)=>{


const Icon = skill.icon;


return(

<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
border rounded-2xl 
p-6 
bg-black/20
shadow-lg
"


>


<Icon size={40}/>


<h3 className="text-xl font-bold mt-5">

{skill.title}

</h3>



<div className="mt-5 space-y-2">


{
skill.items.map((item,i)=>(

<div

key={i}

className="
px-3 py-2
rounded-lg
border
text-sm
"

>

{item}

</div>

))

}


</div>



</motion.div>


)

})

}


</div>


</section>

)

}
