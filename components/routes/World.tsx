import { useState } from 'react';

import Button from '../Button';

export default function World() {

    const [search, setSearch] = useState('')

    function enter(e: any) {
        if (e.key == 'Enter') {
            location.href = `/${search}`
        }
    }

    return (
        <section className="pb-[72px] overflow-scroll snap-y snap-mandatory">
            <menu className="pl-2 md:pl-0 pt-2 md:pt-0 mb-4 snap-start">
                <input onChange={(e) => setSearch(e.target.value.toLowerCase())} onKeyDown={enter} type="search" name="username" placeholder="username" className="input lowercase" />
                <Button onClick={() => location.href = `/${search}`}>Search</Button>
            </menu>

            <h3 className="mx-2 font-bold">Spotlight</h3>

            <div className="my-4 mx-2 flex overflow-scroll snap-x snap-mandatory gap-2">
                <img draggable={false} className="w-4/5 rounded-2xl snap-start" src="https://img.freepik.com/free-vector/winter-sale-banner-christmas-template_1017-16607.jpg?w=826&t=st=1665809168~exp=1665809768~hmac=b7a8e03f6ea29b41a7f955c3487c858448cabe29ea491e6a4052d76d0f76c7ef" />
                <img draggable={false} className="w-4/5 rounded-2xl snap-start" src="https://img.freepik.com/free-vector/winter-sale-banner-christmas-template_1017-16607.jpg?w=826&t=st=1665809168~exp=1665809768~hmac=b7a8e03f6ea29b41a7f955c3487c858448cabe29ea491e6a4052d76d0f76c7ef" />
                <img draggable={false} className="w-4/5 rounded-2xl snap-start" src="https://img.freepik.com/free-vector/winter-sale-banner-christmas-template_1017-16607.jpg?w=826&t=st=1665809168~exp=1665809768~hmac=b7a8e03f6ea29b41a7f955c3487c858448cabe29ea491e6a4052d76d0f76c7ef" />
                <img draggable={false} className="w-4/5 rounded-2xl snap-start" src="https://img.freepik.com/free-vector/winter-sale-banner-christmas-template_1017-16607.jpg?w=826&t=st=1665809168~exp=1665809768~hmac=b7a8e03f6ea29b41a7f955c3487c858448cabe29ea491e6a4052d76d0f76c7ef" />
            </div>

            <h3 className="mx-2 font-bold">Feed</h3>

            <div className="snap-start pt-6 pb-2">
                <div className="flex justify-between items-center mx-2">
                    <section className="flex items-center">
                        <img draggable={false} className="pointer w-8 rounded-full mr-2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d081c0d-d5ed-41d5-becd-b9d37e1b02c2/d7qvse4-674ed946-a90d-4976-b145-576faf9aafcd.png/v1/fill/w_1024,h_1024,q_75,strp/pokemon__pokeball_by_darklight02-d7qvse4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kN3F2c2U0LTY3NGVkOTQ2LWE5MGQtNDk3Ni1iMTQ1LTU3NmZhZjlhYWZjZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTAyNCJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kYXJrbGlnaHQwMi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.2L_mND4DZH-zoSDYnjbo5Qx38abhc5_hFj5TMFbN_Y8" />
                        <p><b className="pointer">darwinprayoga</b> just got Pokemon.</p>
                    </section>
                    <p>9w ago</p>
                </div>
                <img draggable={false} className="pointer w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                <span className="m-2">
                    <h3 className="mb-1">pikachu-world-cap</h3>
                    <b>190,235 views</b>
                </span>
            </div>

            <div className="snap-start pt-6 pb-2">
                <div className="flex justify-between items-center mx-2">
                    <section className="flex items-center">
                        <img draggable={false} className="pointer w-8 rounded-full mr-2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d081c0d-d5ed-41d5-becd-b9d37e1b02c2/d7qvse4-674ed946-a90d-4976-b145-576faf9aafcd.png/v1/fill/w_1024,h_1024,q_75,strp/pokemon__pokeball_by_darklight02-d7qvse4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kN3F2c2U0LTY3NGVkOTQ2LWE5MGQtNDk3Ni1iMTQ1LTU3NmZhZjlhYWZjZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTAyNCJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kYXJrbGlnaHQwMi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.2L_mND4DZH-zoSDYnjbo5Qx38abhc5_hFj5TMFbN_Y8" />
                        <p><b className="pointer">darwinprayoga</b> just got Pokemon.</p>
                    </section>
                    <p>9w ago</p>
                </div>
                <img draggable={false} className="pointer w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                <span className="m-2">
                    <h3 className="mb-1">pikachu-world-cap</h3>
                    <b>190,235 views</b>
                </span>
            </div>

            <div className="snap-start pt-6 pb-2">
                <div className="flex justify-between items-center mx-2">
                    <section className="flex items-center">
                        <img draggable={false} className="pointer w-8 rounded-full mr-2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d081c0d-d5ed-41d5-becd-b9d37e1b02c2/d7qvse4-674ed946-a90d-4976-b145-576faf9aafcd.png/v1/fill/w_1024,h_1024,q_75,strp/pokemon__pokeball_by_darklight02-d7qvse4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kN3F2c2U0LTY3NGVkOTQ2LWE5MGQtNDk3Ni1iMTQ1LTU3NmZhZjlhYWZjZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTAyNCJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kYXJrbGlnaHQwMi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.2L_mND4DZH-zoSDYnjbo5Qx38abhc5_hFj5TMFbN_Y8" />
                        <p><b className="pointer">darwinprayoga</b> just got Pokemon.</p>
                    </section>
                    <p>9w ago</p>
                </div>
                <img draggable={false} className="pointer w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                <span className="m-2">
                    <h3 className="mb-1">pikachu-world-cap</h3>
                    <b>190,235 views</b>
                </span>
            </div>

            <div className="snap-start pt-6 pb-2">
                <div className="flex justify-between items-center mx-2">
                    <section className="flex items-center">
                        <img draggable={false} className="pointer w-8 rounded-full mr-2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d081c0d-d5ed-41d5-becd-b9d37e1b02c2/d7qvse4-674ed946-a90d-4976-b145-576faf9aafcd.png/v1/fill/w_1024,h_1024,q_75,strp/pokemon__pokeball_by_darklight02-d7qvse4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kN3F2c2U0LTY3NGVkOTQ2LWE5MGQtNDk3Ni1iMTQ1LTU3NmZhZjlhYWZjZC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9MTAyNCJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzhkMDgxYzBkLWQ1ZWQtNDFkNS1iZWNkLWI5ZDM3ZTFiMDJjMi9kYXJrbGlnaHQwMi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.2L_mND4DZH-zoSDYnjbo5Qx38abhc5_hFj5TMFbN_Y8" />
                        <p><b className="pointer">darwinprayoga</b> just got Pokemon.</p>
                    </section>
                    <p>9w ago</p>
                </div>
                <img draggable={false} className="pointer w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10160.png" />
                <span className="m-2">
                    <h3 className="mb-1">pikachu-world-cap</h3>
                    <b>190,235 views</b>
                </span>
            </div>
        </section>
    )
}