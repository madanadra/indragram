export default function Postmenu({postmenu, setPostmenu}) {
    const Menu = ({name, red}) => {
        return (
            <h1 className={`${red && 'text-red-500 font-semibold'} font-light text-sm border-b border-slate-200 last:border-b-0 text-center p-3.5 hover:bg-slate-100 cursor-pointer`}>{name}</h1>
        )
    }

    return (
        <div onClick={() => setPostmenu(false)}
        className={`${!postmenu && 'hidden'} fixed z-20 inset-0 bg-[#000] grid items-center bg-opacity-50 modal`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid bg-[#fff] rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <Menu name='Report' red />
                    <Menu name='Unfollow' red />
                    <Menu name='Add to favorites' />
                    <Menu name='Go to post' />
                    <Menu name='Share to...' />
                    <Menu name='Copy link' />
                    <Menu name='Embed' />
                    <Menu name='About this account' />
                    <Menu name='cancel' />
                </div>
            </div>
        </div>
    )
}