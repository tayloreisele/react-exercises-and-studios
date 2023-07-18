export default function BookList() {
   let pageTitle = "Book Titles";
   let book1 = "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780062834935_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D";
   let book2 = "https://prodimage.images-bn.com/pimages/9780316499583_p0_v2_s600x595.jpg";
   let book3 = "https://prodimage.images-bn.com/pimages/9781957568577_p0_v2_s600x595.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Collector" />
         <img src={book2} alt="Obsessed" />
         <img src={book3} alt="A Soul of Ash and Blood: A Blood and Ash Novel" />
      </div>      
   );
}