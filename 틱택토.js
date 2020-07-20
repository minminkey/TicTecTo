var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들=[];
var 칸들=[];
var 턴 = 'X';
var 제목 = document.createElement('h1');
바디.append(제목);
제목.textContent = "틱택토 : 3개를 이어보세요";
var 비동기콜백 = function(이벤트){
    console.log(이벤트.target);
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    console.log(몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    console.log(몇칸);

    if (칸들[몇줄][몇칸].textContent != "") {
        console.log('빈칸아닙니다.');

    } else {
        console.log('빈캅입니다.');
        칸들[몇줄][몇칸].textContent = 턴;
        var 다참 = false;
        if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
            다참 = true;
        }
        if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
            다참 = true;
        }
        if (몇줄 - 몇칸===0||Math.abs(몇줄-몇칸)===2) {
            if ((칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴)||
                ((칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴))) {
                다참 = true;
            }
        }

        if (다참) {
            alert(턴 + '님이 승리');
            턴 = 'X';
            칸들.forEach(function(줄){
                줄.forEach(function(칸){
                    칸.textContent="";
                });
            });
        } else {
            if (턴 === 'O') {
                턴 = 'X';
            } else {
                턴 = 'O';
            }
        }
    }


};
for(var i=0; i<3;i++){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for(var j=0; j<3;j++){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i].push(칸);
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블);
console.log(줄들,칸들);