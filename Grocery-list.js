ready()
function ready (){
    let addBtn = document.getElementsByClassName('shop-btn')
    for(let i = 0; i < addBtn.length;i++){
        let button = addBtn[i]
        button.addEventListener('click',addbtnclicked )
    }
}

function addbtnclicked(event){
    let button = event.target;
    let item = button.parentElement.parentElement;
    let itemTitle = item.getElementsByClassName('item-title')
additemtoList(itemTitle)    
}
function additemtoList(item{
    let listContainer = document.getElementsByClassName('list-container')
    let listItemName = document.getElementsByClassName('listItem-title')
    let ListrowContent = ""
}