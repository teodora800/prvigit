//OBJEKTI 
let blog1={
    title:'Moj blog 1',
    content:'Neki tekst 1',
    likes:350,
    dislikes:5
};
console.log(blog1);
let blog2={
    title:'Moj blog 2!',
    content:'Neki tekst 2',
    likes:25,
    dislikes:250
};
console.log(blog2);
let blog3={
    title:'Moj blog 3',
    content:'Neki tekst 3',
    likes:250,
    dislikes:150
};
console.log(blog3);
let user={
    username:'Teodora Ilic',
    age:22,
    blogs:['title1','title2','title3'],
    login: function(){
        console.log('ulogovani ste');
    },
    logBlogs:function(){
        this.blogs.forEach(b=>{
            console.log(b);
        });
    }
};
user.logBlogs();
user.login();
console.log(this);
let arrBlogs=user.blogs;
for(let i=0; i<arrBlogs.length;i++){
    console.log(`naslov bloga je:${arrBlogs[i]}`);
}
//foreach zamena za for;
//ispis niza blogova forEach metoodom 
arrBlogs.forEach(blog =>{
    console.log(`Nasloov bloga je ${blog}`);
});
//i objekti mogu da budu u nizu
let blogs=[blog1,blog2,blog3];
blogs.forEach(blog=>{
    console.log(blog);
})
//ispisivanje celih objekata
//ispisivanje ispisivanje naslova 
console.log(blog1.title);
blogs.forEach( blog=>{
    console.log(blog.title)
}
);
blogs.forEach(blog=>{
    console.log(blog.title);
});
//ispisivanje elemenata for petljom;
for(let i=0; i<blogs.length;i++){
    console.log(blogs[i].title)
}
//1.zadatak 
blogs=[blog1,blog2,blog3];
let ukBrLajkova=blogs=>{
let suma=0;
blogs.forEach(lajkovi=>{
   suma=suma+lajkovi.likes;
});
return suma;
}
console.log(ukBrLajkova(blogs));
//2.zadatak 
let prosekLajkova=blogs=>{
    let ukupno=ukBrLajkova(blogs);
    let broj=blogs.length;
    let prosecno=ukupno/broj;
    return prosecno;

}
console.log(prosekLajkova(blogs));
//3.zadatak 
let ocene=blogs=>{
    blogs.forEach(ocene=>{
        if(ocene.likes>ocene.dislikes){
            console.log( ocene.title);
        }
    });
}
ocene(blogs);
//4.zadatak 
let uzvicnik=blogs=>{
    blogs.forEach(uzvicnikk=>{
        let m = uzvicnikk.title;
        if(m.endsWith('!')){
            console.log(m);
        };
    });
};
uzvicnik(blogs);
//objekat u objektu;
let korisnik={
    username:'Teodora Ilic',
    godine:22,
    blogs:[blog1,blog2,blog3],
    napisinaslove:function(){
        this.blogs.forEach(
            b=>{
                console.log(b);
            }
        );
    },
    logTitleBlogs:function(){
        this.blogs.forEach(b=>{
            console.log(b.title);
        });
    }
};
console.log(korisnik);
korisnik.napisinaslove();
korisnik.logTitleBlogs();
//Novi zadatak 
let korisnik2={
    username:'pera peric',
    godine:16,
    blogs:[blog1,blog2]
};
let korisnik3={
    username:'marko markovic',
    godine:34,
    blogs:[blog1,blog3]
    
};
let korisnici=[korisnik,korisnik2,korisnik3];
//2.zadatak 
let korisniciii=korisnici=>{korisnici.forEach(koris=>{
    if(koris.godine<18){
        console.log(koris.username);
    }
});
}
korisniciii(korisnici);
//3.zadatak 
let korisniciii1=korisnici=>{
    korisnici.forEach(k=>{
        let nizBlogova=k.blogs;
        nizBlogova.forEach(n=>{
            if(n.likes>50){
                console.log(n.title);
            }
        });
    });
};
korisniciii1(korisnici);
//4.zadatak
let autori=(korisnici,ime)=>{
    korisnici.forEach(k=>{
        if(k.username==ime){
            let nizBlogova=k.blogs;
            nizBlogova.forEach(b=>{
               console.log(b.title); 
            })
        }
    })
};
autori(korisnici,'Teodora Ilic');
//5.zadatak 
let stoLajkova=korisnici=>{
    korisnici.forEach(k=>{
        let blogcici=k.blogs;
        let sumLikes=0;
        blogcici.forEach(l=>{
                sumLikes=sumLikes+l.likes
            
        });
        if(sumLikes>100){
            console.log(k.username);
        }
    });
};
stoLajkova(korisnici); 
//6.zadatak 
//prosecno dislajkova
let superBlog = korisnici =>{
    let sumali=0;//suma svih lajkova kod svih blogova/pocetak je nula
    let sumadis=0;
    let broj=0;//broj koliko ukupno ima blogova/pocetak je nula
    korisnici.forEach(l=>{  
        let nizBlogova=l.blogs;
        nizBlogova.forEach(b=>{
            broj++;
            sumali=sumali+b.likes;
            sumadis=sumadis+b.dislikes;
        });
        
    });
    let prosecno=sumali/broj;
    let prosecnodis=sumadis/broj;
    korisnici.forEach(k=>{
        let nizBlogova=k.blogs;
        nizBlogova.forEach(n=>{
            if(prosecno<n.likes && prosecnodis>n.dislikes){
                console.log(n.title);           
             }
        });
        
    });
}
superBlog(korisnici);