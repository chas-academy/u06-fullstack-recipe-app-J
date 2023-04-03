import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{


  constructor (private http:HttpClient,private router: Router) {

  }



  title = 'Recipe';
  
   
  loggedIn = false;


  ngOnInit(): void{
    this.loggedIn = localStorage.getItem('token') !== null;
    const headers = new HttpHeaders ({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.post('http://127.0.0.1:8000/api/logout', {headers}).subscribe(
      result => console.log(result)
    );
  
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
   
  }



  imgCollection: Array<object> = [
    {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2021/03/vodkapasta_foto_andrea-klintbjer_mathem-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2021/03/vodkapasta_foto_andrea-klintbjer_mathem-800x800.jpg',
      alt: 'Vodkapasta med tomatsås',
      title: 'Vodkapasta med tomatsås'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2006/08/american-pancakes-red-foto-kerstin-eriksson-fyrkant-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2006/08/american-pancakes-red-foto-kerstin-eriksson-fyrkant-800x800.jpg',
      title: 'Amerikanska pannkakor',
      alt: 'Amerikanska pannkakor'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2018/05/asiatisk-nudelsallad-med-krispig-tofu-foto-nurlan-emir-original-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2018/05/asiatisk-nudelsallad-med-krispig-tofu-foto-nurlan-emir-original-800x800.jpg',
      title: 'Asiatisk nudelsallad med krispig tofu',
      alt: 'Asiatisk nudelsallad med krispig tofu'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2021/09/Snabb-blabarscheesecake-i-glas-foto-Nurlan-Emir-Original-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2021/09/Snabb-blabarscheesecake-i-glas-foto-Nurlan-Emir-Original-800x800.jpg',
      title: 'Blåbärscheesecake i glas',
      alt: 'Blåbärscheesecake i glas'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2019/05/rostade_och_rokta_potatisar_med_olkaramelliserad_lok-foto-martin-nordin-mathem.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2019/05/rostade_och_rokta_potatisar_med_olkaramelliserad_lok-foto-martin-nordin-mathem.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: 'https://static.mathem.se/shared/images/recipes/doublelarge/chili-och-citronglaserade-morotter-1080x1080px.jpeg',
      thumbImage: 'https://static.mathem.se/shared/images/recipes/doublelarge/chili-och-citronglaserade-morotter-1080x1080px.jpeg',
      title: 'Chili- och citronglaserade morötter',
      alt: 'Chili- och citronglaserade morötter'
    },  {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2021/03/vodkapasta_foto_andrea-klintbjer_mathem-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2021/03/vodkapasta_foto_andrea-klintbjer_mathem-800x800.jpg',
      alt: 'Vodkapasta med tomatsås',
      title: 'Vodkapasta med tomatsås'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2006/08/american-pancakes-red-foto-kerstin-eriksson-fyrkant-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2006/08/american-pancakes-red-foto-kerstin-eriksson-fyrkant-800x800.jpg',
      title: 'Amerikanska pannkakor',
      alt: 'Amerikanska pannkakor'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2018/05/asiatisk-nudelsallad-med-krispig-tofu-foto-nurlan-emir-original-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2018/05/asiatisk-nudelsallad-med-krispig-tofu-foto-nurlan-emir-original-800x800.jpg',
      title: 'Asiatisk nudelsallad med krispig tofu',
      alt: 'Asiatisk nudelsallad med krispig tofu'
    }, {
      image: 'https://eu-central-1.linodeobjects.com/tasteline/2021/09/Snabb-blabarscheesecake-i-glas-foto-Nurlan-Emir-Original-800x800.jpg',
      thumbImage: 'https://eu-central-1.linodeobjects.com/tasteline/2021/09/Snabb-blabarscheesecake-i-glas-foto-Nurlan-Emir-Original-800x800.jpg',
      title: 'Blåbärscheesecake i glas',
      alt: 'Blåbärscheesecake i glas'
    }
];
}