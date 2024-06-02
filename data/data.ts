const currentYear = new Date().getFullYear();
const data = {
    sitename: "Platforme Gie Mezguita Dattes",
    siteurl: "http://localhost:3000/",
    sitelogo: "https://res.cloudinary.com/dnkuui7sz/image/upload/v1717037198/giemezguita/logo.png",
    hero:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717176822/giemezguita/Pngtree_canary_island_date_palm_on_15147449_wralt5.png",

    listCategory : [
        {
            id:1,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717325655/giemezguita/category/jihel.jpg",
            price: 3.5,
            rating: 4.2,
            numReviews: 31,
            name: "Jihel",
        },
        {
            id:2,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717257975/giemezguita/category/Boufegouss.jpg",
            price: 4.5,
            rating: 4.2,
            numReviews: 34,
            name: "Boufegouss",
        },
        {
            id:3,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717325776/giemezguita/category/Bousthemmi.jpg",
            price: 4.5,
            rating: 3.2,
            numReviews: 24,
            name: "Bousthemmi",
        },
        {
            id:4,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717325854/giemezguita/category/mejhoul.jpg",
            price: 90.0,
            rating: 4.0,
            numReviews: 30,
            name: "Mejhoul",
        },
        {
            id:5,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717325923/giemezguita/category/tadmamet.jpg",
            price: 2.5,
            rating: 4.2,
            numReviews: 14,
            name: "Tadmamet",
        },
        {
            id:6,
            isNew: false,
            imageURL:"https://res.cloudinary.com/dnkuui7sz/image/upload/v1717325996/giemezguita/category/bousekri.jpg",
            price: 3.0,
            rating: 3.2,
            numReviews: 24,
            name: "Bouskeri",
        },

        ],

        NAV_ITEMS: [
            {
              label: "Inspiration",
              children: [
                {
                  label: "Explore Design Work",
                  subLabel: "Trending Design to inspire you",
                  href: "#",
                },
                {
                  label: "New & Noteworthy",
                  subLabel: "Up-and-coming Designers",
                  href: "#",
                },
              ],
            },
            {
              label: "Find Work",
              children: [
                {
                  label: "Job Board",
                  subLabel: "Find your dream design job",
                  href: "#",
                },
                {
                  label: "Freelance Projects",
                  subLabel: "An exclusive list for contract work",
                  href: "#",
                },
              ],
            },
            {
              label: "Learn Design",
              href: "#",
            },
            {
              label: "Hire Designers",
              href: "#",
            },
          ],

} 
    

      
export default data ;

