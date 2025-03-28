import styles from "./style.module.css";

export default function Header() {
  return (
    <div className="text-white h-full w-full">
      <div
        className={`${styles.background} w-full min-h-screen flex justify-center items-center py-20 flex-col`}
      >
        <div className="font-extrabold text-5xl md:text-6xl leading-[102px] text-center">
          Achievements
        </div>
      </div>
    </div>
  );
}
