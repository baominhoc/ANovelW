import Link from "next/link";

export default function SlideCard() {
    return (
        <>

            <div
                style={{
                    background: `linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.8)) 0% 0% / cover, url('https://embed.pixiv.net/artwork.php?illust_id=117650619&mdate=1712511119')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className="slidesr slider-item relative overflow-hidden min-w-full"
            >
                <div className="px-12 -mt-12">
                    <h1 className="mt-6 text-5xl font-bold text-white">Welcome to my World</h1>

                    <p className="text-light mt-4 text-left line-clamp-2">
                    Mend your pace, sway to the beat
                    Hands up, embrace who you wanna be
                    We're reaching heights unseen, ooh-whoa, whoa
                    Feel the fire deep within
                    You're the key to where my trust begins
                    Join my dream, it's just the right time, whoa
                        <br />
                        Tiny, who returned to being a slum orphan from being one of the continent’s best knights, now possesses strong potential by gaining new powers that he did not have in his previous life. Can he indeed prevent the fall of mankind in this life?
                    </p>
                    <div id="buttons" className="flex space-x-4 mt-6">
                        <Link href={`/manga/test`}>
                            <div className={`button-animate p-2 px-6 text-sm flex items-center text-center justify-center cursor-pointer mt-2 rounded-lg bg-zinc-700/40 border border-zinc-700/20 hover:bg-zinc-700/60`}>
                                <p>View Detail</p><i className={`fa fa-circle-info text-xl ml-2`}></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}