//定义
const power=document.querySelector('.power')
const arrow=document.querySelector('.arrow')
const aw=document.querySelector('.aw')
//对每个奖励的定义
const aa=document.querySelector('.aa')
const bb=document.querySelector('.bb')
const cc=document.querySelector('.cc')
const dd=document.querySelector('.dd')
const ee=document.querySelector('.ee')
const ff=document.querySelector('.ff')
//事件监听调用函数
document.addEventListener('keydown', up)
function up(e){
    //点一下，能量持续增加
    if (e.key === ' ') {
        //每次按空格箭头复原
        arrow.className='arrow'
        power.className='power'
        void power.offsetHeight //重置动画
        //生成随机数[0,100)
        const num=Math.floor(Math.random()*100)
        //左边能量
        power.classList.add('up')
        //右边抽奖
        if(0<=num&&num<=16){arrow.classList.add('rotate_a')
            setTimeout(() => {showAward(aa)}, 2000)
        }
        else if(17<=num&&num<=33){arrow.classList.add('rotate_b')
            setTimeout(() => {showAward(bb)}, 2000)
        }
        else if(34<=num&&num<=50){arrow.classList.add('rotate_c')
            setTimeout(() => {showAward(cc)}, 2000)
        }
        else if(51<=num&&num<=77){arrow.classList.add('rotate_d')
            setTimeout(() => {showAward(dd)}, 2000)
        }
        else if(78<=num&&num<=88){arrow.classList.add('rotate_e')
            setTimeout(() => {showAward(ee)}, 2000)
        }
        else{arrow.classList.add('rotate_f')
            setTimeout(() => {showAward(ff)}, 2000)
        }
        //上面的文字显示

    }
}
//ai给的换信息函数
function showAward(node) {
    aw.innerHTML = ''                 // 清空上方显示区
    const copy = node.cloneNode(true) // 复制中奖标签
    aw.appendChild(copy)              // 放进去
}







