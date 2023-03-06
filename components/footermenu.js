export default function Footermenu({name}) {
    return (
        <>
            <span className='cursor-pointer hover:underline'>{name}</span>
            <span className="last-of-type:hidden"> &sdot; </span>
        </>
    )
}