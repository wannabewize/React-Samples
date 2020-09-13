import React from 'react';

function MovieList() {
    let movies = [
        { title: "킹덤", year: 2019, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT4cnG2DDrNo4hb7kJHJY0Qg34_Kpt7MFphQCEyQX62fDlW_AnJeaw0azYoxW7tIBb10Zw4T61YdTYb0ARcAixVt-bvrE7DZAYda6a5kzefQWZlCxaEdhzjuRmnE.jpg?r=812' },
        { title: "위쳐", year: 2019, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0ZXP5_JYvYCopH-nQoOqB8Z8h_S70mbS9cUdqdtS-6udFKzDRAS4XZiGJOWYVoe-7iWtyWt4TxcRcIsh9sCXC6QJB55GtQPe-oftuz8jcj5S5_noaVSZDyh-r-.jpg?r=559' },
        { title: "인간수업", year: 2020, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcbIRcflRL1nu32ZS2AGHxneYM-pax9-1kJi5vg7r2wv5HcWs5OJqx5gml7rabyKwQVW9ALa_Rv5A-GWDE7R5aDKw9z4RGoNnkQLImo_diX902OlsfsUYAH1m_iF.jpg?r=79e' },
        { title: "사이코지만 괜찮아", year: 2020, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQ4ag8ZwoKs5CbyySLt3DZIRHPmQ3PFagUgrJb5OSdyoYHs_2xHmOI8KVlBEl_V6XrYhd7HnZ3M8Oyq_O6tjMjOUPNojtGhR7Pw4FCY5J8a0UmRRUQFLTDd6FqMOwCUWMO7vMFd4tPAIOxzqtNxN9ibpkkY.jpg?r=9af' },
        { title: "슬기로운 의사생활", year: 2020, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABev4EaJFBKyBi73TuQfQbwjnKelw-zcOLxWPU_8H2Zdbc31Xq7YzkYF6a8Oi6Vm_iDAdXz7wxDhh32ZzFwX9k1TG8ws.jpg?r=661' },
        { title: "러브, 데스 + 로봇", year: 2019, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc2Mv_kMH3Vm6gbN7t2Gt-tBJ-Ohl555TztlWzDv4-9R-Un2NC3k_kFiUPmoaMjLtaI6S5pjsC3DH1Hqwr8aeUlxPx4deCRgLpkbW6F3mEnL__fqPw4VZF1hH8N2.jpg?r=646' },
        { title: "엄브렐러 아카데미", year: 2019, poster: 'https://occ-0-1009-3996.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbrsZqp2g4oIob-xrG3MZti-uXuWyiDHa3be9ln8ZplwnmEW9aw0aw2cm9myASNaNrUhRon5cPlFp8LX9mEsK1FdWncJbW33Di9xxYlV_bTMyCqQwZmC8pztnBOy.jpg?r=7db' }
    ];

    let element = movies.map(item => 
        <li>
            <img src={item.poster} height={40} />
            {item.title} - {item.year}
        </li>);

    return (
        <ul>{element}</ul>
    );
}
export default MovieList;
