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


export const projectsList = [
    {
      title: "Ridesharing Simulation",
      description: " Developed a simulation model of a spontaneous ridesharing system to implement different strategies and used Python to perform statistical analysis for evaluation",
      imgUrl: ridesharing,
      projectId: 'ridesharing',
      type: 'uni',
      code: 'https://github.com/lokhei/Ridesharing-Simulation'

    },
    {
      title: "Olympoid",
      description: "3D Olympoid modelled and animated pair figure skating in Maya",
      imgUrl: cgi,
      projectId: 'olympoid',
      type: 'uni',
      code: 'https://github.com/lokhei/Olympoid',


    },
    {
      title: "Kitchen Feud",
      description: "online multiplayer kitchen game using Unity, involving competitive gameplay against other kitchen teams while allowing for strategic sabotage",
      imgUrl: KF,
      projectId: 'kitchen_feud',
      type: 'uni',
      code: 'https://github.com/KaliKaloo/Kitchen-Feud'

    },
    {
      title: "Bristol Stock Exchange",
      description: "Worked with the Bristol Stock Exchange to determine the parameters that produce the highest revenue. Then extended the code by adding a new adaptive trader that proved to perform better",
      imgUrl: bse,
      projectId: 'bse',
      type: 'uni',
      code: 'https://github.com/lokhei/IEFT-CW',

    },
    {
      title: "No Entry Sign Detector",
      description: "Built and trained a detector to detect instances of No Entry signs in images using opencv library",
      imgUrl: noEntry,
      projectId: 'no_entry',
      type: 'uni',
      code: 'https://github.com/lokhei/IPCV',

    },
    {
      title: "C++ Graphics Renderer",
      description: "A C++ program that renders a Cornell Box scene using various techniques, including wireframing, rasterisations and ray tracing.",
      imgUrl: CG,
      projectId: 'cornell',
      type: 'uni',
      code: 'https://github.com/lokhei/ComputerGraphics'

    },
    {
      title: "History Trails",
      description: "interface/web app for museum visitors about display objects by fetching JSON-encoded data from open datasets and using Agile development and Spring Boot framework",
      imgUrl: history_trails,
      projectId: 'history_trails',
      type: 'uni',
      code: 'https://github.com/lokhei/History-Trails',

    },
    {
      title: "Game of Life",
      description: "parallel and distributed implementations of Conway’s Game of Life in Go, using remote-procedure-calls to link multiple AWS nodes",
      imgUrl: gol,
      projectId: 'gol',
      type: 'uni',
      code: 'https://github.com/lokhei/Game-of-Life',

    },
    {
      title: "Scotland Yard",
      description: "Wrote a Java program to allow users to play Scotland Yard board game using OOP paradigms and design patterns",
      imgUrl: scotland_yard,
      projectId: 'scotland_yard',
      type: 'uni',
      code: 'https://github.com/lokhei/ScotlandYard',

    },
    {
      title: "Amazon",
      description: "Automated the selection of Getty images to purchase for the purposes of display on Alex devices, by targeting high-volume failing entity requests and employing serverless architecture",
      imgUrl: amazon,
      projectId: 'amazon',
      type: 'work_exp',

    },
    {
      title: "Inductosense",
      description: "Displayed raw data in various formats using React and Typescript to provide clear and informative visualisations which highlighted trends and problematic data points",
      imgUrl: inductosense,
      projectId: 'inductosense',
      type: 'work_exp',

    },
  ];
