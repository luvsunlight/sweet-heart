const myName = "李子园"
const herName = "西西"

const defaultMessageList = [
	`${ herName }你好啊`,
	`我是${ myName }的心心`,
    "你可以陪我说几句话吗",  
]

const satisfiedMessageList = [
    "谢谢你来陪我!", 
    `${ herName }你好嘻嘻`,
    "嘻嘻",
    "嘿嘿",
    herName,
    "好痒",
    "你陪我我好开心啊",
    `希望${ herName }你每天都开心一点`,
    `${ herName }我好想你`
]

const sadMessageList = [
    `${ myName }现在很难过`
]

const secretMessageList = [
    `${ myName }从来没有骗过你`,
    `${ herName }我好喜欢你`,
    '我想牵着你的手'
]

// Object.defineProperty('李子园', "喜欢西西", {
//     value: true,
//     writable: false
// })

export { myName, herName, defaultMessageList, satisfiedMessageList, sadMessageList}
