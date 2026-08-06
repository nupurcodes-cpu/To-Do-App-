//HTML se input box ki value fetch kr rhe hai, jaha task likha jayega
const item = document.querySelector("#item");

//#HTML se main to-do box ko find kr rhe hai jaha saari lists dikhegi
const toDoBox = document.querySelector("#to-do-box");

//Put event Listener on Input Box, taki keyboard ki activity track ho sake
item.addEventListener(
    "keyup",
    function (event){
        //Checking if user pressed "Enter"?
        if(event.key == "Enter"){

            //Agar Enter dabaya, toh input ki value ko addToDo function me bhej do
            addToDo(this.value);

            //Task add hone ke baad input box ko khali(empty) kr do
            this.value = "";
        }
    }
)

//Yeh function naya task list me banana ka kaam karega
const addToDo = (item) => {
    //memmory me ek naya HTML list item (<li>) bana rhe hain
    const listItem = document.createElement("li");

    //Naya list item ke andar text aur delete icon ka HTML daal rahe hain
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
        this.classList.toggle("done");
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function (){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem);
}