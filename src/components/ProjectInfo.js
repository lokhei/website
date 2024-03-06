import noEntry from "../assets/img/project/NoEntry.jpg";
import KF from "../assets/img/project/kitchen.jpg";
import CG from "../assets/img/project/CG.png";
import gol from "../assets/img/project/gol.png";
import ridesharing from "../assets/img/project/ridesharing.png";
import bse from "../assets/img/project/bse.png";
import scotland_yard from "../assets/img/project/scotland-yard.png";
import cgi from "../assets/img/project/cgi.jpg"
import amazon from "../assets/img/project/amazon.png"
import inductosense from "../assets/img/project/inductosense.jpeg"
import history_trails from "../assets/img/project/history_trails.png"
import tpicap from "../assets/img/project/tp_icap.jpeg"


export const projectsList = [
    {
      title: "Ridesharing Simulation",
      description: "Developed a dynamic spontaneous ridesharing system by creating simulation model using the Mesa package in Python.\
      This project implemented a range of ridesharing strategies employing efficient greedy algorithms, and offers flexibility for\
      both single and multi-passenger systems. A comprehensive evaluation was conducted through statistical analyses, comparing the\
      effectiveness of different strategies as measured by a range of metrics.",
      summary: "Developed a simulation model of a spontaneous ridesharing system and evaluated different strategies",
      imgUrl: ridesharing,
      projectId: 'ridesharing',
      type: 'uni',
      code: 'https://github.com/lokhei/Ridesharing-Simulation',
      date: 'Jan - May 2023'

    },
    {
      title: "Olympoid",
      description: "Used Autodesk Maya to design and animate a pair of robotic droid characters (known as Olympoids) competing in a pair figure skating\
      Olympic event. The project encompassed the entire production pipeline, starting with the inception of a unique character design,\
      followed by building the geometry, adding lighting and shading to the model, and finally rigging and animating it.", 
      summary: "3D Olympoid modelled and animated pair figure skating in Maya",
      imgUrl: cgi,
      projectId: 'olympoid',
      type: 'uni',
      code: 'https://github.com/lokhei/Olympoid',
      date: 'Jan - May 2023'
    },
    {
      title: "Kitchen Feud",
      description: "Led the development of a multiplayer web browser game, \"Kitchen Feud,\" in which two teams compete\
      to operate superior restaurants. This game offers collaborative cooking experiences through engaging minigames,\
      with the option to strategically sabotage opposing teams. Standout features include the competitive gameplay, custom-made\
      assets, sophisticated particle systems, and voice chat functionality for an immersive gaming experience.",
      summary: "Online multiplayer competitive kitchen game using Unity",
      imgUrl: KF,
      projectId: 'kitchen_feud',
      type: 'uni',
      code: 'https://github.com/KaliKaloo/Kitchen-Feud',
      date: 'Jan - May 2022'

    },
    {
      title: "Bristol Stock Exchange",
      description: "Leveraged the Bristol Stock Exchange, a simulation of an electronic financial exchange, to assess the performance\
      of the Parameterised Response Differential Evolution (PRDE) adaptive trading strategy, optimising its parameters across diverse\
      market conditions. The PRDE implementation was then extended by incorporating a greedy variant of Differential Evolution, and subsequently evaluated.",
      summary: "Evaluated the PRDE adaptive trading strategy using the Bristol Stock Exchange simulation",
      imgUrl: bse,
      projectId: 'bse',
      type: 'uni',
      code: 'https://github.com/lokhei/IEFT-CW',
      date: 'Nov 2022'

    },
    {
      title: "No Entry Sign Detector",
      description: "This project uses the OpenCV library to detect No entry signs in images.\
      Different pre-processing techniques are used and the detection algorithm relies on the Viola-Jones detector,\
      along with the circle Hough transform to filter out false positives.",
      summary: "Built and trained a detector to detect instances of No Entry signs in images",
      imgUrl: noEntry,
      projectId: 'no_entry',
      type: 'uni',
      code: 'https://github.com/lokhei/IPCV',
      date: 'Nov 2021'

    },
    {
      title: "C++ Graphics Renderer",
      description: "A C++ program that renders a Cornell Box scene using wireframing, rasterisation and ray tracing.\
      The renderer includes capabilities like material file loading, texture mapping, shadows,\
      and a range of lighting techniques including ambient, diffuse, and specular lighting.\
      The keyboard controls allow dynamic interaction with the scene, enabling translation and rotation of the camera,\
      switching between different rendering modes and lighting effects with the flexibility to export images and create animated videos.",
      summary: "A graphic renderer written in C++ that supports wireframing, rasterisation and ray tracing",
      imgUrl: CG,
      projectId: 'cornell',
      type: 'uni',
      code: 'https://github.com/lokhei/ComputerGraphics',
      date: 'Nov 2021'

    },
    {
      title: "History Trails",
      description: "A group project developed for the Bristol Museum and M Shed in response to the pandemic.\
      \"History Trails\" is a web app, that serves as a replacement for the legacy touch screen digital interpretation system,\
      providing museum visitors with information about display objects by fetching JSON-encoded data from open datasets and using the Spring Boot framework.",
      summary: "Interface/web app for museum visitors about display objects",
      imgUrl: history_trails,
      projectId: 'history_trails',
      type: 'uni',
      code: 'https://github.com/lokhei/History-Trails',
      date: 'Sep 2020 - May 2021'

    },
    {
      title: "Game of Life",
      description: "Implemented Conway's Game of Life in Go: a cellular automaton governed solely\
      by its initial state. The project comprises a dual implementation, featuring a concurrent version\
      utilising multiple worker goroutines on a single machine, and a distributed simulation that leverages\
      remote-procedure-calls to connect multiple AWS nodes.",
      summary: "Parallel and distributed implementations of Conway’s Game of Life in Go",
      imgUrl: gol,
      projectId: 'gol',
      type: 'uni',
      code: 'https://github.com/lokhei/Game-of-Life',
      date: 'Nov 2020'

    },
    {
      title: "Scotland Yard",
      description: "Wrote a Java program to allow users to play Scotland Yard board game using OOP paradigms and design patterns",
      summary: "Java program to allow users to play Scotland Yard board game",
      imgUrl: scotland_yard,
      projectId: 'scotland_yard',
      type: 'uni',
      code: 'https://github.com/lokhei/ScotlandYard',
      date: 'March 2020'

    },
    {
      title: "TP ICAP",
      description: ["Collaborated with external AWS team to prototype a chatbot that leveraged Large Language Models to retrieve\
      information from the Configuration Management Database (CMDB). This will result in a streamlined process that ensures swift\
      access to critical data for fellow engineers, e.g., when troubleshooting problematic servers.",
      "Actively maintaining and improving the CMDB and associated tooling by collaborating with stakeholders. Key accomplishments\
      include adding queuing mechanisms for increased resilience, and implementing an automated process to flag end-of-life hardware\
      and operating systems across all applications, thus facilitating more informed decision-making on system upgrades."],
      summary: "Enhancing capabilities of the Configuration Management Database (CMDB) and associated tooling",
      imgUrl: tpicap,
      projectId: 'tpicap',
      job_title: 'Associate Software Engineer',
      type: 'work_exp',
      date: 'Sep 2023 - Present'
    },
    {
      title: "Amazon",
      description: "Automating the selection of Getty images to purchase for the purposes of display on Alex devices using serverless architecture.\
      The primary focus was on targeting high-volume failing entity requests. This was achieved by querying Athena logs for failing entity requests,\
      translating them into human-readable requests, and querying the Getty API based on the category of the entity.",
      summary: "Automated the selection of Getty images to purchase for the purposes of display on Alex devices.",
      imgUrl: amazon,
      projectId: 'amazon',
      job_title: 'Software Development Engineering Intern',
      type: 'work_exp',
      date: 'June - Sep 2022'

    },
    {
      title: "Inductosense",
      description: "Transforming raw pipe corrosion data into actionable insights using React and Typescript.\
      The objective was to offer clear and informative visualizations that highlighted trends and identified problematic\
      data points within the dataset, contributing to a comprehensive analysis of pipe corrosion patterns.",
      summary: "Displayed raw pipe corrosion data in various formats using React and Typescript",
      imgUrl: inductosense,
      projectId: 'inductosense',
      type: 'work_exp',
      job_title: 'Software Engineering Intern',
      date: 'July - Sep 2021'

    },
  ];
