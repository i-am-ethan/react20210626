//form取得
const form = document.getElementById("js-form")
//input取得
const input = document.getElementById("js-getInput")

const inputBtn = document.getElementById("js-clickSubmit")
//未完了エリアのulを取得
const incompleteUl = document.getElementById("incomplete_ul")
// 完了エリアのulを取得
const completeUl = document.getElementById("complete_ul")

const clickedSubmit = () => {
    //li要素作る
    let newLi = document.createElement("li")
    newLi.setAttribute("id", "incomplete")
    newLi.innerHTML = input.value
    //完了ボタン
    const completeBtn = document.createElement("button")
    completeBtn.setAttribute("id", "completeBtn")
    completeBtn.width = "40px"
    completeBtn.width = "30px"
    completeBtn.innerHTML = "完了"
    //削除ボタン
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("id", "deleteBtn")
    deleteBtn.width = "40px"
    deleteBtn.width = "30px"
    deleteBtn.innerHTML = "削除"
    //戻るボタン
    const backBtn = document.createElement("button")
    backBtn.setAttribute("id", "backBtn")
    backBtn.width = "40px"
    backBtn.width = "30px"
    backBtn.innerHTML = "戻す"

    //完了ボタンをappendする
    newLi.appendChild(completeBtn)
    //削除ボタンをappendする
    newLi.appendChild(deleteBtn)
    //ulに表示する
    incompleteUl.appendChild(newLi)
    //完了ボタンをクリックした時の処理
    completeBtn.addEventListener("click", () => {
        let parent = event.target.parentNode;
        let removeCompleteBtn = event.target.parentNode.childNodes[1];
        let removeDeleteBtn = event.target.parentNode.childNodes[2];
        parent.removeChild(removeCompleteBtn)
        parent.removeChild(removeDeleteBtn)
        parent.appendChild(backBtn)
        completeUl.appendChild(parent)
    })
    deleteBtn.addEventListener("click", () => {
        let parent = event.target.parentNode;
        incompleteUl.removeChild(parent)
    })
    //戻すボタンをクリックした時の処理
    backBtn.addEventListener("click", () => {
        console.log("戻すボタン")
        let parent = event.target.parentNode;
        let removeBackBtn = event.target.parentNode.childNodes[1];
        parent.removeChild(removeBackBtn)
        incompleteUl.appendChild(parent)
        parent.appendChild(completeBtn)
        parent.appendChild(deleteBtn)

    })
}

inputBtn.addEventListener("click", clickedSubmit)