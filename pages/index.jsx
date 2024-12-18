import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

export const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tell_Qaramel_vue_a%C3%A9rienne.jpg",
    address: "Some Address, 5, 12345, Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://asset.kompas.com/crops/r2-LxyEGuV8U_pIlCMvP8Urf6mw=/0x0:1600x1067/1200x800/data/photo/2022/09/16/632412f1e2e73.jpeg",
    address: "Jalan Durian Raya, 5, 4/5, Bogor",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUP} />;
    </>
  );
};

export default HomePage;
