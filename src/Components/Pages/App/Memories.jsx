const memoriesArray = [
  {
    location: "Gulshan 1 Dhaka.",
    memoryName: "Best Memory",
    visitedDate: "May 11, 2023",
    imageURL:
      "https://i.ibb.co/BP8yBZp/418527538-1372581310315237-6490723207451847118-n.jpg",
    hashtags: ["#Best Memory", "#Best Memory", "#Best Memory"],
    description:
      "1. The sun-kissed beach days, laughter echoing against the waves.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "Best Memory",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://i.ibb.co/ZX7WyRF/420651916-1377077666532268-2577505294647587952-n.jpg",
    hashtags: ["#Best Memory", "#Best Memory", "#Best Memory"],
    description:
      "2. Childhood adventures, chasing dreams under the summer sky's canvas.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "Best Memory",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://i.ibb.co/ZBVXB94/423538921-1380892259484142-5368855909822729487-n.jpg",
    hashtags: ["#Best Memory", "#Best Memory", "#Best Memory"],
    description:
      "3. Graduation day: triumph, tears, and the promise of new beginnings.",
  },
  {
    location: "Gazipur, Dhaka",
    memoryName: "Best Day",
    visitedDate: "March 8, 2021",
    imageURL:
      "https://i.ibb.co/Mn3rx4m/422695014-1380895596150475-8917868866490449690-n.jpg",
    hashtags: ["#Best Day", "#Best Day", "#Best Day"],
    description:
      "4. Family gatherings, warmth mingling with the aroma of home-cooked meals.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "Best Day",
    visitedDate: "March 8, 2023",
    imageURL:
      "https://i.ibb.co/NT0mqZs/424571789-1382497865990248-7323554692741253257-n.jpg",
    hashtags: ["#Best Day", "#Best Day", "#Best Day"],
    description:
      "5. Travel escapades, discovering new cultures, and forging timeless friendships.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "Best Day",
    visitedDate: "August 30, 2022",
    imageURL:
      "https://i.ibb.co/4mYQ337/409595504-1353409948899040-8374916345127078647-n.jpg",
    hashtags: ["#Best Day", "#Best Day", "#Best Day"],
    description:
      "6. Wedding vows exchanged, hearts entwined in love's eternal embrace.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "Unforgettable Day",
    visitedDate: "November 19, 2019",
    imageURL:
      "https://i.ibb.co/6NVV1d1/406870655-1354277575478944-6548643340896612406-n.jpg",
    hashtags: ["#Best Day", "#Best Day", "#Best Day"],
    description:
      "7. Career milestones, the thrill of accomplishments and growth's sweet satisfaction.",
  },
  {
    location: "Bandarban, BD",
    memoryName: "Unforgettable Day",
    visitedDate: "September 26, 2018",
    imageURL:
      "https://i.ibb.co/bRkKstT/417690583-1369884760584892-8434875175148389866-n.jpg",
    hashtags: ["#Best day", "#Best day", "#Best day"],
    description:
      "8. Quiet moments, cherished solitude, finding peace in life's simple joys.",
  },
];

const Memories = () => {
  return (
    <div>
      <h2 className="text-2xl my-5 font-teko font-300">Memories</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {memoriesArray.map((dt, index) => {
          return (
            <div key={index} className="relative group">
              <div className="col-span-1 relative h-[200px] overflow-hidden group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={dt.imageURL}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity opacity-0 group-hover:opacity-0"></div>
                <div className="absolute top-5 left-5 transform text-white text-center transition-opacity opacity-100 group-hover:opacity-0">
                  <p className="text-lg font-bold">{dt.memoryName}</p>
                  <p className="text-sm">{dt.visitedDate}</p>
                </div>
              </div>
              <div className="col-span-3 p-4 bg-white bg-opacity-30 h-[200px] overflow-hidden">
                <div className="flex flex-wrap">
                  {dt?.hashtags?.map((hs, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 whitespace-nowrap text-xs bg-gray-300 rounded-md p-[2px] overflow-hidden overflow-ellipsis"
                    >
                      {hs}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{dt.location}</h3>
                <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis">
                  {dt.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Memories;
