import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
      title: 'Köttbullar med sås',
      alt: 'köttbullar med sås'
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
