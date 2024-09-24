function initialsGenerator(authorName: string){
    let initials:string = '';
    if (authorName.includes(" ")){
        initials = authorName[0]
        for(let i = 0; i < authorName.length; i++){
            if (authorName[i] == ' '){
                initials = initials + authorName[i+1];
                break;
            }
        }
    }else{
        initials = authorName.toUpperCase().slice(0,2)
    }
    return initials.toUpperCase()
} 

export function Avatar ({name = 'Sabari Krishnan', size= 'small'}: {name?: string, size:'small'| 'big'}){
    const initials:string = initialsGenerator(name);
    return ( <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size ==='small'?"w-6 h-6": "w-10 h-10"}` } >
         <span className={` text-gray-600 dark:text-gray-300 ${size ==='small'?"text-xs":"text-md"}`}>{initials}</span>
     </div>) 
 }