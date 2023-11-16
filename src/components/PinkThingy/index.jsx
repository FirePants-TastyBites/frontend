import styles from "./pinkThingy.module.scss";

function PinkThingy() {
    return (
        <svg className={styles.pinkThingy} xmlns="http://www.w3.org/2000/svg" width="85" height="24" viewBox="0 0 85 24" fill="none">
            <path d="M2 12H83" stroke="#EFA0D2" strokeWidth="4" strokeLinecap="round" />
            <path d="M26 2H59" stroke="#EFA0D2" strokeWidth="4" strokeLinecap="round" />
            <path d="M26 22H59" stroke="#EFA0D2" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}

export default PinkThingy;