"use client"
import { useContext } from "react";
import BtnList from "../BtnList";
import FilterContext from "../../filterContext";

export default function TagsFilter() {
  const ColdSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 11H17.83L20.37 8.46C20.76 8.07 20.76 7.44 20.37 7.05C19.98 6.66 19.34 6.66 18.95 7.05L15 11H13V9L16.95 5.05C17.34 4.66 17.34 4.02 16.95 3.63C16.56 3.24 15.93 3.24 15.54 3.63L13 6.17V3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V6.17L8.46 3.63C8.07 3.24 7.44 3.24 7.05 3.63C6.66 4.02 6.66 4.66 7.05 5.05L11 9V11H9L5.05 7.05C4.66 6.66 4.02 6.66 3.63 7.05C3.24 7.44 3.24 8.07 3.63 8.46L6.17 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H6.17L3.63 15.54C3.24 15.93 3.24 16.56 3.63 16.95C4.02 17.34 4.66 17.34 5.05 16.95L9 13H11V15L7.05 18.95C6.66 19.34 6.66 19.98 7.05 20.37C7.44 20.76 8.07 20.76 8.46 20.37L11 17.83V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V17.83L15.54 20.37C15.93 20.76 16.56 20.76 16.95 20.37C17.34 19.98 17.34 19.34 16.95 18.95L13 15V13H15L18.95 16.95C19.34 17.34 19.98 17.34 20.37 16.95C20.76 16.56 20.76 15.93 20.37 15.54L17.83 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11Z"
        fill="#DB7A35"
      />
    </svg>
  );
  const FireSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.48 12.3499C17.91 8.2699 12.32 8.0499 13.67 2.1199C13.77 1.6799 13.3 1.3399 12.92 1.5699C9.29 3.7099 6.68 7.9999 8.87 13.6199C9.05 14.0799 8.51 14.5099 8.12 14.2099C6.31 12.8399 6.12 10.8699 6.28 9.4599C6.34 8.9399 5.66 8.6899 5.37 9.1199C4.69 10.1599 4 11.8399 4 14.3699C4.38 19.9699 9.11 21.6899 10.81 21.9099C13.24 22.2199 15.87 21.7699 17.76 20.0399C19.84 18.1099 20.6 15.0299 19.48 12.3499ZM10.2 17.3799C11.64 17.0299 12.38 15.9899 12.58 15.0699C12.91 13.6399 11.62 12.2399 12.49 9.9799C12.82 11.8499 15.76 13.0199 15.76 15.0599C15.84 17.5899 13.1 19.7599 10.2 17.3799Z"
        fill="#DB7A35"
      />
    </svg>
  );
  const LactoseSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.2969"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <line
        x1="3.91906"
        y1="3.90907"
        x2="20.1847"
        y2="20.1747"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <path
        d="M9.39844 8.36719H16.9922V18C16.9922 18.4272 16.6459 18.7734 16.2188 18.7734H9.39844V8.36719Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M8.60156 8.36719V18.6146L7.53102 18.2485C7.21809 18.1415 7.00781 17.8474 7.00781 17.5167V8.36719L8.60156 8.36719Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M8.20312 8.76562H9V18.375L8.20312 18.0573V8.76562Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.85938 6.39844L9.60938 7.94531H16.3125L15.5625 6.39844H8.85938Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.85938 6.39844L9.60938 7.94531H16.3125L15.5625 6.39844H8.85938Z"
        stroke="#DB7A35"
      />
      <path
        d="M15.375 5.97656H15.7734V5.57812V5.15625C15.7734 4.72909 15.4272 4.38281 15 4.38281H8.95312C8.52597 4.38281 8.17969 4.72909 8.17969 5.15625V5.57812V5.97656H8.57812H15.375Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M7.67111 8.025H8.75189C8.75527 8.025 8.75754 8.02153 8.75618 8.01843L8.20378 6.76C8.20213 6.75623 8.19676 6.75627 8.19517 6.76007L7.66679 8.0185C7.6655 8.02159 7.66776 8.025 7.67111 8.025Z"
        fill="#F5F5F5"
      />
      <line
        x1="15.7104"
        y1="5.87917"
        x2="16.8823"
        y2="8.22292"
        stroke="#DB7A35"
        strokeWidth="0.75"
      />
      <line
        x1="8.27825"
        y1="6.10306"
        x2="9.45012"
        y2="8.44681"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <line
        x1="8.13907"
        y1="6.03463"
        x2="7.01407"
        y2="8.33151"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <mask id="path-12-inside-1_1055_125" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2374 13.9513C15.2374 13.9513 15.2374 13.9514 15.2374 13.9514C15.2374 15.0913 14.3133 16.0154 13.1734 16.0154C12.0335 16.0154 11.1094 15.0913 11.1094 13.9514C11.1094 13.9514 11.1094 13.9513 11.1094 13.9513C11.1094 13.7091 11.1511 13.4766 11.2278 13.2607C11.4656 12.5099 12.0702 11.5484 13.1156 10.2278C13.1449 10.1908 13.202 10.1906 13.2315 10.2276C14.2993 11.5646 14.9035 12.5387 15.1313 13.2965C15.2001 13.5023 15.2374 13.7224 15.2374 13.9513Z"
        />
      </mask>
      <path
        d="M15.2374 13.9513H15.9879V13.9513L15.2374 13.9513ZM11.1094 13.9513L11.8599 13.9513L11.1094 13.9513ZM11.2278 13.2607L11.9351 13.5118L11.9394 13.4997L11.9433 13.4874L11.2278 13.2607ZM13.1156 10.2278L13.7041 10.6937V10.6937L13.1156 10.2278ZM13.2315 10.2276L13.8179 9.75918L13.8179 9.75918L13.2315 10.2276ZM15.1313 13.2965L14.4126 13.5126L14.4159 13.5236L14.4195 13.5345L15.1313 13.2965ZM14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514H15.9879C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513H14.4868ZM14.4868 13.9514C14.4868 14.6768 13.8988 15.2648 13.1734 15.2648V16.7659C14.7278 16.7659 15.9879 15.5058 15.9879 13.9514H14.4868ZM13.1734 15.2648C12.448 15.2648 11.8599 14.6768 11.8599 13.9514H10.3588C10.3588 15.5058 11.6189 16.7659 13.1734 16.7659V15.2648ZM11.8599 13.9514V13.9513L10.3588 13.9513C10.3588 13.9513 10.3588 13.9513 10.3588 13.9513C10.3588 13.9514 10.3588 13.9514 10.3588 13.9514H11.8599ZM11.8599 13.9513C11.8599 13.7959 11.8866 13.6482 11.9351 13.5118L10.5205 13.0096C10.4156 13.305 10.3588 13.6224 10.3588 13.9513L11.8599 13.9513ZM11.9433 13.4874C12.1363 12.878 12.6628 12.009 13.7041 10.6937L12.5271 9.76196C11.4775 11.0879 10.7949 12.1418 10.5123 13.034L11.9433 13.4874ZM13.7041 10.6937C13.4338 11.0351 12.9169 11.0364 12.645 10.6959L13.8179 9.75918C13.4871 9.34492 12.8561 9.34646 12.5271 9.76196L13.7041 10.6937ZM12.645 10.6959C13.7069 12.0255 14.2294 12.9034 14.4126 13.5126L15.8501 13.0804C15.5775 12.174 14.8917 11.1036 13.8179 9.75918L12.645 10.6959ZM14.4195 13.5345C14.463 13.6645 14.4868 13.8044 14.4868 13.9513L15.9879 13.9513C15.9879 13.6405 15.9373 13.34 15.8432 13.0586L14.4195 13.5345Z"
        fill="#DB7A35"
        mask="url(#path-12-inside-1_1055_125)"
      />
    </svg>
  );
  const HasLactoseSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.2969"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <path
        d="M9.39844 8.36719H16.9922V18C16.9922 18.4272 16.6459 18.7734 16.2188 18.7734H9.39844V8.36719Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M8.60156 8.36719V18.6146L7.53102 18.2485C7.21809 18.1415 7.00781 17.8474 7.00781 17.5167V8.36719L8.60156 8.36719Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M8.20312 8.76562H9V18.375L8.20312 18.0573V8.76562Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.85938 6.39844L9.60938 7.94531H16.3125L15.5625 6.39844H8.85938Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.85938 6.39844L9.60938 7.94531H16.3125L15.5625 6.39844H8.85938Z"
        stroke="#DB7A35"
      />
      <path
        d="M15.375 5.97656H15.7734V5.57812V5.15625C15.7734 4.72909 15.4272 4.38281 15 4.38281H8.95312C8.52597 4.38281 8.17969 4.72909 8.17969 5.15625V5.57812V5.97656H8.57812H15.375Z"
        fill="#F5F5F5"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <path
        d="M7.67111 8.025H8.75189C8.75527 8.025 8.75754 8.02153 8.75618 8.01843L8.20378 6.76C8.20213 6.75623 8.19676 6.75627 8.19517 6.76007L7.66679 8.0185C7.6655 8.02159 7.66776 8.025 7.67111 8.025Z"
        fill="#F5F5F5"
      />
      <line
        x1="15.7104"
        y1="5.87917"
        x2="16.8823"
        y2="8.22292"
        stroke="#DB7A35"
        strokeWidth="0.75"
      />
      <line
        x1="8.27825"
        y1="6.10306"
        x2="9.45012"
        y2="8.44681"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <line
        x1="8.13907"
        y1="6.03463"
        x2="7.01407"
        y2="8.33151"
        stroke="#DB7A35"
        strokeWidth="0.796875"
      />
      <mask id="path-11-inside-1_1055_228" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2374 13.9513C15.2374 13.9513 15.2374 13.9514 15.2374 13.9514C15.2374 15.0913 14.3133 16.0154 13.1734 16.0154C12.0335 16.0154 11.1094 15.0913 11.1094 13.9514C11.1094 13.9514 11.1094 13.9513 11.1094 13.9513C11.1094 13.7091 11.1511 13.4766 11.2278 13.2607C11.4656 12.5099 12.0702 11.5484 13.1156 10.2278C13.1449 10.1908 13.202 10.1906 13.2315 10.2276C14.2993 11.5646 14.9035 12.5387 15.1313 13.2965C15.2001 13.5023 15.2374 13.7224 15.2374 13.9513Z"
        />
      </mask>
      <path
        d="M15.2374 13.9513H15.9879V13.9513L15.2374 13.9513ZM11.1094 13.9513L11.8599 13.9513L11.1094 13.9513ZM11.2278 13.2607L11.9351 13.5118L11.9394 13.4997L11.9433 13.4874L11.2278 13.2607ZM13.1156 10.2278L13.7041 10.6937V10.6937L13.1156 10.2278ZM13.2315 10.2276L13.8179 9.75918L13.8179 9.75918L13.2315 10.2276ZM15.1313 13.2965L14.4126 13.5126L14.4159 13.5236L14.4195 13.5345L15.1313 13.2965ZM14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513V13.9513V13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9513 14.4868 13.9513 14.4868 13.9513C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514V13.9514V13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514C14.4868 13.9514 14.4868 13.9514 14.4868 13.9514H15.9879C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514V13.9514V13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9514C15.9879 13.9514 15.9879 13.9514 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513C15.9879 13.9513 15.9879 13.9513 15.9879 13.9513V13.9513V13.9513H14.4868ZM14.4868 13.9514C14.4868 14.6768 13.8988 15.2648 13.1734 15.2648V16.7659C14.7278 16.7659 15.9879 15.5058 15.9879 13.9514H14.4868ZM13.1734 15.2648C12.448 15.2648 11.8599 14.6768 11.8599 13.9514H10.3588C10.3588 15.5058 11.6189 16.7659 13.1734 16.7659V15.2648ZM11.8599 13.9514V13.9513L10.3588 13.9513C10.3588 13.9513 10.3588 13.9513 10.3588 13.9513C10.3588 13.9514 10.3588 13.9514 10.3588 13.9514H11.8599ZM11.8599 13.9513C11.8599 13.7959 11.8866 13.6482 11.9351 13.5118L10.5205 13.0096C10.4156 13.305 10.3588 13.6224 10.3588 13.9513L11.8599 13.9513ZM11.9433 13.4874C12.1363 12.878 12.6628 12.009 13.7041 10.6937L12.5271 9.76196C11.4775 11.0879 10.7949 12.1418 10.5123 13.034L11.9433 13.4874ZM13.7041 10.6937C13.4338 11.0351 12.9169 11.0364 12.645 10.6959L13.8179 9.75918C13.4871 9.34492 12.8561 9.34646 12.5271 9.76196L13.7041 10.6937ZM12.645 10.6959C13.7069 12.0255 14.2294 12.9034 14.4126 13.5126L15.8501 13.0804C15.5775 12.174 14.8917 11.1036 13.8179 9.75918L12.645 10.6959ZM14.4195 13.5345C14.463 13.6645 14.4868 13.8044 14.4868 13.9513L15.9879 13.9513C15.9879 13.6405 15.9373 13.34 15.8432 13.0586L14.4195 13.5345Z"
        fill="#DB7A35"
        mask="url(#path-11-inside-1_1055_228)"
      />
    </svg>
  );
  const HasGlutenSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.2969"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7033 18.1875C14.5079 18.2969 18.0095 17.3297 17.5783 12.5859C17.5783 12.3906 17.4236 11.9859 16.8048 11.9297C17.1017 11.625 17.672 10.425 17.5783 8.06251C17.5725 7.91753 17.4611 7.61719 17.0158 7.52344C16.6408 7.44844 15.0001 7.40157 14.6251 7.66407C14.7814 6.71094 14.5173 4.41094 12.2111 2.83594H11.7892C10.8361 3.46094 9.02356 5.30157 9.39856 7.66407C9.05481 7.57032 8.04387 7.41094 6.75012 7.52344C6.73525 7.54363 6.72252 7.55848 6.71004 7.57304C6.66203 7.62906 6.61769 7.6808 6.46887 8.01562C6.37512 9 6.3645 10.6569 7.24231 11.9297C6.9845 11.9453 6.422 12.0984 6.422 12.5859C6.422 12.627 6.41913 12.6879 6.41546 12.7658C6.36462 13.8449 6.16004 18.1874 11.2968 18.1875V20.5312C11.2968 20.9196 11.6116 21.2344 12 21.2344C12.3883 21.2344 12.7031 20.9196 12.7031 20.5312V18.1875H12.7033Z"
        fill="#DB7A35"
      />
      <path
        d="M13.2422 6.96094C13.2422 8.10938 12.1406 9.35156 12 9.35156C11.8594 9.35156 10.7578 8.10938 10.7578 6.96094C10.7578 5.8125 11.8594 4.47656 12 4.47656C12.1406 4.47656 13.2422 5.8125 13.2422 6.96094Z"
        fill="#F5F5F5"
      />
      <path
        d="M15.3066 11.4822C14.4946 12.2943 12.8373 12.3937 12.7379 12.2943C12.6384 12.1948 12.7379 10.5375 13.5499 9.72547C14.362 8.9134 16.0856 8.74767 16.185 8.84711C16.2844 8.94655 16.1187 10.6701 15.3066 11.4822Z"
        fill="#F5F5F5"
      />
      <path
        d="M15.3066 15.9353C14.4946 16.7474 12.8373 16.8468 12.7379 16.7474C12.6384 16.6479 12.7379 14.9907 13.5499 14.1786C14.362 13.3665 16.0856 13.2008 16.185 13.3002C16.2844 13.3997 16.1187 15.1232 15.3066 15.9353Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.69434 11.4822C9.5064 12.2943 11.1637 12.3937 11.2631 12.2943C11.3626 12.1948 11.2631 10.5375 10.4511 9.72547C9.63899 8.9134 7.91541 8.74767 7.81598 8.84711C7.71654 8.94655 7.88227 10.6701 8.69434 11.4822Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.69434 15.9353C9.5064 16.7474 11.1637 16.8468 11.2631 16.7474C11.3626 16.6479 11.2631 14.9907 10.4511 14.1786C9.63899 13.3665 7.91541 13.2008 7.81598 13.3002C7.71654 13.3997 7.88227 15.1232 8.69434 15.9353Z"
        fill="#F5F5F5"
      />
    </svg>
  );
  const GlutenSvg = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.2969"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <line
        x1="3.91906"
        y1="3.90907"
        x2="20.1847"
        y2="20.1747"
        stroke="#DB7A35"
        strokeWidth="1.40625"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7033 18.1875C14.5079 18.2969 18.0095 17.3297 17.5783 12.5859C17.5783 12.3906 17.4236 11.9859 16.8048 11.9297C17.1017 11.625 17.672 10.425 17.5783 8.06251C17.5725 7.91753 17.4611 7.61719 17.0158 7.52344C16.6408 7.44844 15.0001 7.40157 14.6251 7.66407C14.7814 6.71094 14.5173 4.41094 12.2111 2.83594H11.7892C10.8361 3.46094 9.02356 5.30157 9.39856 7.66407C9.05481 7.57032 8.04387 7.41094 6.75012 7.52344C6.73525 7.54363 6.72252 7.55848 6.71004 7.57304C6.66203 7.62906 6.61769 7.6808 6.46887 8.01562C6.37512 9 6.3645 10.6569 7.24231 11.9297C6.9845 11.9453 6.422 12.0984 6.422 12.5859C6.422 12.627 6.41913 12.6879 6.41546 12.7658C6.36462 13.8449 6.16004 18.1874 11.2968 18.1875V20.5312C11.2968 20.9196 11.6116 21.2344 12 21.2344C12.3883 21.2344 12.7031 20.9196 12.7031 20.5312V18.1875H12.7033Z"
        fill="#DB7A35"
      />
      <path
        d="M13.2422 6.96094C13.2422 8.10938 12.1406 9.35156 12 9.35156C11.8594 9.35156 10.7578 8.10938 10.7578 6.96094C10.7578 5.8125 11.8594 4.47656 12 4.47656C12.1406 4.47656 13.2422 5.8125 13.2422 6.96094Z"
        fill="#F5F5F5"
      />
      <path
        d="M15.3066 11.4822C14.4946 12.2943 12.8373 12.3937 12.7379 12.2943C12.6384 12.1948 12.7379 10.5375 13.5499 9.72547C14.362 8.9134 16.0856 8.74767 16.185 8.84711C16.2844 8.94655 16.1187 10.6701 15.3066 11.4822Z"
        fill="#F5F5F5"
      />
      <path
        d="M15.3066 15.9353C14.4946 16.7474 12.8373 16.8468 12.7379 16.7474C12.6384 16.6479 12.7379 14.9907 13.5499 14.1786C14.362 13.3665 16.0856 13.2008 16.185 13.3002C16.2844 13.3997 16.1187 15.1232 15.3066 15.9353Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.69434 11.4822C9.5064 12.2943 11.1637 12.3937 11.2631 12.2943C11.3626 12.1948 11.2631 10.5375 10.4511 9.72547C9.63899 8.9134 7.91541 8.74767 7.81598 8.84711C7.71654 8.94655 7.88227 10.6701 8.69434 11.4822Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.69434 15.9353C9.5064 16.7474 11.1637 16.8468 11.2631 16.7474C11.3626 16.6479 11.2631 14.9907 10.4511 14.1786C9.63899 13.3665 7.91541 13.2008 7.81598 13.3002C7.71654 13.3997 7.88227 15.1232 8.69434 15.9353Z"
        fill="#F5F5F5"
      />
    </svg>
  );

  const coffeeTags = [
    {
      name: ColdSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: false, tag: "cold" },
      }
    },
    {
      name: FireSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: true, tag: "cold" },
      }
    },
    { 
      name: GlutenSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: false, tag: "glutem" },
      }
    },
    {
      name: HasGlutenSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: true, tag: "glutem" },
      }
    },
    {
      name: LactoseSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: false, tag: "lactose" },
      }
    },
    {
      name: HasLactoseSvg,
      dispatchObj: {
        type: "tagFilter",
        payload: { invert: true, tag: "lactose" },
      }
    },
  ];

  return (
    <div className="tags_container">
      <h2>Classificações</h2>
      <BtnList content={coffeeTags} />
    </div>
  );
}
