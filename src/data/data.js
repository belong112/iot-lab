import img1 from "../img/member_picture/morty.jpg"
import img2 from "../img/member_picture/rick.jpg"
const members = [
	{
		image:img1,
		identity:"phd",
		name:"王建民",
		text:'棒球'
	},
	{
		image:img2,
		identity:"master",
		name:'林書豪',
		text:'籃球'
	},
	{
		identity:"master",
		name:'全',
		text:'可親'
	},
	{
		image:img2,
		identity:"phd",
		name:'薛',
		text:'阿龍'
	},
	{
		identity:"master",
		name:'ㄟ',
		text:''
	},
	{
		identity:"other",
		name:'朱',
		text:'一ㄟ服'
	},
	{
		identity:"master",
		name:'你好',
		text:'不好'
	},
	{
		identity:"other",
		name:'嗨',
		text:'郭yeee'
	}		
]

//最新消息 date:為日期, title是標題, text是內文
//複製其中一則消息後照相同格式修改即可
//請更新在陣列尾端
//換行請用 \n 
const posts = [
	{
		id:1,
		date:"2019/1/8",
		title:"賀! 我大中華民國奧運勇奪10金",
		text:"媒體導向只會讓群眾看到罷工造成多少人不便，造成資方多少損害，不確定是不是集團花錢的成果，但的確影響許多人的觀感，認為罷工都是不必要的。我認為最大的問題還是媒體素養，希望能多像博恩這樣的節目探討兩方的問題"
	},
	{
		id:2,
		date:"2019/5/12",
		title:"馬上進入買華航機票的單元,欸!",
		text:"喜識樣好狀但音以細技回不看方；因高它排的風家報中沒真藝用利刻。有中種者，了字指各著山的規……方品軍人人，後商小水在，上也不問對務，來此民故家業候間覺。故新現創家有們個；成歷於寫的球的包的顧羅相公龍國答創強風力我學；史哥那，回小高起行。此來景己覺為人一學是的樓動……林量他加選球兒連切你保。兒市洋公明時非活麼們福子人然間體……險裡樣德。中有朋查電同，了力戰般和山出濟是男有如們主我鄉身持，紅為地時國車和；連論的"
	},
	{
		id:3,
		date:"2019/8/12",
		title:"馬久久吃法位比奇堡!",
		text:"球不有言友我、約經專玩開自參食上：還度戲片龍的人代最第頭；己玩類鄉可國學了類什一多說言。數示到發入樣住我用加展成單，北盡臺度技想好，還才樣長出，所這上子那過包阿可的成文不全政，法先獲英策量筆朋能持府聽青據們根；行出信朋國來思前點一月同園。期北自怎。而的度感前起道座母金位教人林步兩我里；的下一防候態，提人後……縣離所要區只濟？來了和天？造子斯商水幾我著提：以育我的是……年夫用感代王照去看長上外道麼說正在同！"
	},
	{
		id:4,
		date:"2019/8/15",
		title:"明天就是閉幕式囉",
		text:"在不來的人務必說一聲，不然食物可能會浪費了另外這次的攤位有需要領號碼牌的限額卡牌活動，領取時間分別為9:30一次，10:30一次，如果太晚來的話會少掉一點機會唷~也有在信件中告訴夥伴們，會有履歷健檢的攤位，因此如果有意願的話可以印出自己的履歷紙本，不過同樣也希望提醒大家，履歷健檢不是這個活動設計的環節，只是剛好有前輩和講師很好心地想提供協助，因此服務的人是有限的，但是這"
	},
	{
		id:5,
		date:"2019/8/15",
		title:"親愛的參賽夥伴",
		text:"她邊課一白也不成我公強得去身做差流家山大然海時傳想？\n他動道題校數存設做只飯你美舉了亮無到型有再石無原開印意雙者種。態一大兩樂除活，景北要手學成：知可病準式。校東我言指生小屋他天！政沒友的飛本公，勢德紙從世知什陸沒臉的中地陽已車眼一小下滿感應相。仍是命大。一爸每樣色相以一育人西重、來經專車據……說製力事像王舉臺此大……現但問因會拉；的國告念族西，另委此不家沒那的龍清過過一著灣場"
	},
	{
		id:6,
		date:"2019/8/15",
		title:"",
		text:"texe22"
	},
	{
		id:7,
		date:"2019/8/15",
		title:"test",
		text:"texe22"
	}
]

const posts_number = posts.map((item,i)=>{
	return i.toString()
})


//顯示於第一頁的新聞 
//date:為日期, title是標題, text是內文
//複製其中一則消息後照相同格式修改即可
//特別注意 text 不可超過40字
const news = [
	{
		date:"2019/8/19",
		title:"水瓶座8月19日星座運勢",
		text:"在財運方面，今天的運勢很旺哦，你是否也有這樣的感覺？ 適合喝酒，遠離酒精對健康更好。"
	},
	{
		date:"2019/8/19",
		title:"處女座8月19日星座運勢",
		text:"今天的好運並不常見，灰色的物品能為你帶來好運。今天會有平常想不出來的好點子。"
	}
]

const r_paper = [
	{
		title:'How Time Matters: Learning Time-Decay Attention for Contextual Spoken Language Understanding in Dialogues',
		author:'chiu chi chen',
		date:'2019.1'
	},
	{
		title:'Dynamic service negotiation protocol (DSNP) and wireless',
		author:'Google',
		date:'2017.4'
	},
	{
		title:'Dynamic Programming and Optimal control',
		author:'Amazon',
		date:'2018.4'
	}
]

export default {members, posts, news, posts_number, r_paper};
