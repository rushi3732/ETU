import React from "react";
import { FaHome, FaHospital, FaHistory } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { GiDrop } from "react-icons/gi";

const Menu = [
  {
    title: "Home",
    icon: <FaHome />,
    path: "/dashboard/home",
  },
  {
    title: "Account",
    icon: <BsFillPersonFill />,
    path: "/dashboard/account",
  },
  {
    title: "Chart",
    icon: <BsFillPersonFill />,
    path: "/dashboard/chart",
  },
  {
    title: "Patient",
    icon: <MdOutlinePersonalInjury />,
    path: "/dashboard/patient",
  },
  {
    title: "Donations",
    icon: <FaHospital />,
    path: "/dashboard/donations",
  },
  {
    title: "Blood Requests",
    icon: <GiDrop />,
    path: "/dashboard/bloodrequest",
  },
  {
    title: "Request History",
    icon: <FaHistory />,
    path: "/dashboard/requesthistory",
  },
  {
    title: "Blood Stock",
    icon: <BiDonateBlood />,
    path: "/dashboard/bloodstock",
  },
  {
    title: "Project",
    icon: <BiDonateBlood />,
    subMenu: true,
    collapse: 1,
    submenuItems: [
      {
        title: "Master",
        subMenuChildren: true,
        submenuItemsChildren: [
          {
            title: "wizard",
            path: "/dashboard/multistepform",
          },
          {
            title: "ETU",
            path: "/dashboard/etuCasesheet",
          },
          {
            title: "Tax",
            path: "***",
          },
        ],
      },
      {
        title: "Ub Master",
        subMenuChildren: true,
        submenuItemsChildren: [
          {
            title: "Web Cam",
            path: "/dashboard/webcam",
          },
          {
            title: "Children 2",
            path: "***",
          },
          {
            title: "Children 3",
            path: "***",
          },
        ],
      },
      {
        title: "Wizard Form",
        path: "dashboard/multistepform",
      },
    ],
  },
];

export default Menu;
