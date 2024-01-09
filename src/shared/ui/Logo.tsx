export const Logo = (props: {width: string, height: string}) => {
    const {width, height} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 70 74" fill="none">
            <path d="M1.05393e-06 17.2581L4.82728 24.7645L6.56951 27.4736L3.31374 27.3745L2.39999 27.3467L17.445 54.0063H22.6837H23.6349L24.1437 54.7975L31.9909 67L39.6651 54.8112L40.1718 54.0063H41.1339H45.7112L61.9381 26.2786L60.7884 26.3457L57.4616 26.5397L59.2175 23.7515L64 16.1569L32.0337 4L1.05393e-06 17.2581Z" fill="#4169E1" stroke="#001122" strokeWidth="7"/>
        </svg>
    )
}