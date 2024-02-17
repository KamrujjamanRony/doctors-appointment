export default function DoctorsData() {
    const doctors = [
        {
          id: crypto.randomUUID(),
          name: "Steve Jobs",
          department: "cardiology",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1704797490.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Bill Gates",
          department: "dental",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1521004739Dr_Sanawar_(6).JPG"
        },
        {
          id: crypto.randomUUID(),
          name: "Elon Mask",
          department: "surgery",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1543208339.jpg"
        },
        {
          id: crypto.randomUUID(),
          name: "Lerry Page",
          department: "microbiology",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1674367360.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Mukesh Ambani",
          department: "neuromedicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1674367271.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Ratan Tata",
          department: "medicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1522313708Dr_Faruque_(4).JPG"
        },
        {
          id: crypto.randomUUID(),
          name: "Jhankar Mahbub",
          department: "dental",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1699177751.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Sumit Saha",
          department: "cardiology",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1680586547.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Steve Jobs",
          department: "dental",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1704797490.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Bill Gates",
          department: "cardiology",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1521004739Dr_Sanawar_(6).JPG"
        },
        {
          id: crypto.randomUUID(),
          name: "Elon Mask",
          department: "microbiology",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1543208339.jpg"
        },
        {
          id: crypto.randomUUID(),
          name: "Lerry Page",
          department: "surgery",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1674367360.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Mukesh Ambani",
          department: "medicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1674367271.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Ratan Tata",
          department: "neuromedicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1522313708Dr_Faruque_(4).JPG"
        },
        {
          id: crypto.randomUUID(),
          name: "Jhankar Mahbub",
          department: "medicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1699177751.png"
        },
        {
          id: crypto.randomUUID(),
          name: "Sumit Saha",
          department: "neuromedicine",
          degree: "MBBS MS",
          description: "MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.MBBS, DTCD (Chest), MD (Cardiology) Fellowship Training in Interventional Cardiology from Sri Lanka, Japan and Korea.",
          img: "https://www.squarehospital.com/storage/images/1680586547.png"
        }
      ];
  return doctors;
}
