export default function Footermenu({item}) {
    return (
        <>
            <span className='cursor-pointer hover:underline'>{item}</span>
            <span className="last-of-type:hidden"> &sdot; </span>
        </>
    )
}