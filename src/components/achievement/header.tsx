import styles from "./style.module.css";

export default function Header() {
  return (
    <div className="text-white h-full w-full">
      <div
        className={`${styles.background} w-full min-h-screen flex justify-center items-center py-20 flex-col`}
      >
        <div className="font-extrabold text-6xl md:text-7xl leading-[102px] text-center">
          ABOUT <span className="text-red-600">US</span>
        </div>
      </div>
    </div>
  );
}
