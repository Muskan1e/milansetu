/* ============================================================
   MILANSETU MEMBER DATA

   Sample member profiles shown on the Home and Browse Profile
   pages. js/app.js reads this list through window.members.

   Every profile has:
   - name, age, profession, city, education, gender
   - degree   : "Graduate" or "Post Graduate"  (used by the filter)
   - language : mother tongue                   (used by the filter)
   - caste    : "Brahmin", "General", "SC" ...   (used by the filter)
   - religion : "Hindu", "Sikh", "Muslim" ...    (used by the filter)
   - image    : portrait photo (assets/images/)

   To use your own original photos, just replace the files in
   assets/images/ with the same file names (keep a face visible,
   about 4:3.5 ratio), or change the "image" paths below.
============================================================ */

window.members = [
    /* Order = order on the Browse Profile page.
       "featured" (1-4) = the 4 cards shown on the Home page "Recent Joint Profile". */
    {
        name: "Ananya Das", age: 24, profession: "Doctor",
        city: "Kolkata, West Bengal", education: "MBBS, NRS Medical College", degree: "Graduate",
        gender: "Bride", language: "Bengali", caste: "SC", religion: "Hindu",
        image: "assets/images/bride-04.jpg"
    },
    {
        name: "Sayani Lahore", age: 28, profession: "Lawyer",
        city: "Bankura, West Bengal", education: "LLB, Calcutta University", degree: "Graduate",
        gender: "Bride", language: "Bengali", caste: "Brahmin", religion: "Hindu",
        image: "assets/images/bride-05.jpg"
    },
    {
        name: "Simran Bhatia", age: 26, profession: "Marketing Manager",
        city: "Chandigarh, Punjab", education: "MBA, Panjab University", degree: "Post Graduate",
        gender: "Bride", language: "Punjabi", caste: "General", religion: "Sikh",
        image: "assets/images/bride-06.jpg"
    },
    {
        name: "Ishita Roy", age: 27, profession: "Chartered Accountant",
        city: "Delhi", education: "CA, ICAI", degree: "Post Graduate",
        gender: "Bride", language: "Hindi", caste: "General", religion: "Hindu",
        image: "assets/images/bride-07.jpg"
    },
    {
        name: "Nandini Ghosh", age: 29, profession: "College Professor",
        city: "Kolkata, West Bengal", education: "PhD, Presidency University", degree: "Post Graduate",
        gender: "Bride", language: "Bengali", caste: "General", religion: "Hindu",
        image: "assets/images/bride-08.jpg"
    },
    {
        name: "Pooja Verma", age: 23, profession: "Interior Designer",
        city: "Lucknow, Uttar Pradesh", education: "B.Des, IIAD Delhi", degree: "Graduate",
        gender: "Bride", language: "Hindi", caste: "SC", religion: "Hindu",
        image: "assets/images/bride-09.jpg"
    },
    {
        name: "Madhuri Patil", age: 25, profession: "Pharmacist",
        city: "Mumbai, Maharashtra", education: "B.Pharm, Mumbai University", degree: "Graduate",
        gender: "Bride", language: "Hindi", caste: "General", religion: "Hindu",
        image: "assets/images/bride-10.jpg"
    },
    {
        name: "Kavya Nair", age: 26, profession: "Software Engineer",
        city: "Mumbai, Maharashtra", education: "B.Tech, VJTI Mumbai", degree: "Graduate",
        gender: "Bride", language: "Hindi", caste: "General", religion: "Hindu",
        image: "assets/images/bride-11.jpg"
    },
    {
        name: "Zoya Khan", age: 27, profession: "Journalist",
        city: "Delhi", education: "MA, Jamia Millia Islamia", degree: "Post Graduate",
        gender: "Bride", language: "Urdu", caste: "General", religion: "Muslim",
        image: "assets/images/bride-12.jpg"
    },
    {
        name: "Sritama Sengupta", age: 28, profession: "Neuro Surgent", featured: 1,
        city: "Mumbai, Maharashtra", education: "MSC, IIT Mumbai", degree: "Post Graduate",
        gender: "Bride", language: "Bengali", caste: "Brahmin", religion: "Hindu",
        image: "assets/images/bride-01.jpg"
    },
    {
        name: "Sritama Sengupta", age: 28, profession: "Neuro Surgent", featured: 2,
        city: "Mumbai, Maharashtra", education: "MSC, IIT Mumbai", degree: "Graduate",
        gender: "Groom", language: "Hindi", caste: "General", religion: "Hindu",
        image: "assets/images/groom-01.jpg"
    },
    {
        name: "Sritama Sengupta", age: 28, profession: "Neuro Surgent", featured: 3,
        city: "Mumbai, Maharashtra", education: "MSC, IIT Mumbai", degree: "Post Graduate",
        gender: "Bride", language: "Bengali", caste: "Brahmin", religion: "Hindu",
        image: "assets/images/bride-02.jpg"
    },
    {
        name: "Sritama Sengupta", age: 28, profession: "Neuro Surgent", featured: 4,
        city: "Mumbai, Maharashtra", education: "MSC, IIT Mumbai", degree: "Graduate",
        gender: "Bride", language: "Punjabi", caste: "General", religion: "Sikh",
        image: "assets/images/bride-03.jpg"
    }
];

/* Each member gets a unique id (1, 2, 3 ...). The profile page opens
   profile-details.html?id=<id> and shows THAT member's photo and details. */
window.members.forEach((m, i) => { m.id = i + 1; });

/* Ananya has 4 extra photos (shown as thumbnails on her profile). */
window.members[0].hobbies = ["Driving", "Travelling", "Writing", "Fitness"];
window.members[0].photos = [
    "assets/images/detail-thumb-1.jpg",
    "assets/images/detail-thumb-2.jpg",
    "assets/images/detail-thumb-3.jpg",
    "assets/images/detail-thumb-4.jpg"
];

/* The logged-in user (opened from the header avatar). */
window.me = {
    id: "me", name: "Aarav Mehta", age: 29, profession: "Software Engineer",
    city: "Mumbai, Maharashtra", education: "B.Tech, IIT Bombay", degree: "Graduate",
    gender: "Groom", language: "Hindi", caste: "General", religion: "Hindu",
    image: "assets/images/me.jpg", photos: ["assets/images/me.jpg"],
    hobbies: ["Travelling", "Fitness", "Writing"]
};

/* Success stories used by the home page slider. */
window.stories = [
    {
        names: "Gopal & Kanika",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis imperdiet dapibus. Fusce luctus urna augue, eu consequat augue porta vitae. Nullam rutrum nulla vel tincidunt vehicula.",
        image: "assets/images/slider-1.jpg"
    },
    {
        names: "Karan & Dishna",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, arcu vel mattis tempor, leo nunc rutrum arcu, eu venenatis urna sem quis magna. Suspendisse in nibh facilisis, tincidunt ipsum at.",
        image: "assets/images/slider-2.jpg"
    },
    {
        names: "Arjun & Meera",
        text: "Aliquam pellentesque nisl ac nisl tempor efficitur. Donec rhoncus lectus nibh, sed ornare est sollicitudin vitae. Praesent quis sem scelerisque, bibendum sem at, dignissim diam. Fusce luctus urna augue.",
        image: "assets/images/success-2.jpg"
    }
];
