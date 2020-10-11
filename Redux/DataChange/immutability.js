/**
 * 데이터 불변성과 수정
 */
const game = {
    title : 'DEATH STRANDING',
    production: 'KOJIMA Productions',
    iHave: false,
    year: 0
}

// 데이터 복제와 변경
// game에서 year를 2019로 변경한 값을 대입하시오.
const newGame = {...game, year: 2019};
console.log(newGame);

// iHave를 삭제하시오
const newGame2 = {...newGame};
delete newGame2.iHave;
console.log("newGame2:", newGame2);

// 원본 데이터는 변경되지 않을 것을 확인 - 데이터 불변성
console.log("Origin game:", game);


// 배열
const gotys = ["데스 스트랜딩", "갓 오브 워", "젤다의 전설", "언차티드4"];

// 새로운 원소 추가
const newGotys = [...gotys, "더 위쳐3"];


console.log('new gotys:', newGotys);







