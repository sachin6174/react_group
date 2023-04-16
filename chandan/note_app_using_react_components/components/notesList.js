import { SingleNoteComponent } from "./singleNote";
let items=[]
for(let i=0;i<8;i++){
    items.push(i)
}
module.exports.NoteListComponent=()=>{
    return (
        <div>
            {
                items.map((item, index) =>{
                    return (
                        <SingleNoteComponent  topic={`topic ${index}`} desc={`desc ${index}`}/>
                    )
                })
            }
        </div>
    )
}
