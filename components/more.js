import { signOut } from 'next-auth/react'

export default function More({more, setMore}) {
    const Menu = ({name, click}) => {
        return (
            <h1 className="bg-[#fff] text-center p-2.5 hover:bg-slate-100 cursor-pointer" onClick={click}>{name}</h1>
        )
    }

    return (
        <div onClick={() => setMore(false)}
        className={`${!more && 'hidden'} fixed inset-0 bg-[#000] grid items-center bg-opacity-50`}>
            <div className="w-full max-w-sm p-3.5 mx-auto">
                <div className="grid gap-y-px bg-slate-200 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <Menu name='Settings' />
                    <Menu name='Your activity' />
                    <Menu name='Saved' />
                    <Menu name='Switch appearance' />
                    <Menu name='Report a problem' />
                    <Menu name='Switch accounts' />
                    <Menu name='Sign out' click={() => signOut()} />
                </div>
            </div>
        </div>
    )
}