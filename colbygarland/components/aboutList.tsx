import { ListItem } from './listItem';

export const AboutList = () => {
  return (
    <ul className="mb-10">
      <ListItem title="Software Engineer" icon="hand-peace-o" />
      <ListItem title="780 882 4742" icon="mobile" />
      <ListItem title="hello [at] colbygarland [dot] ca" icon="envelope" />
      <ListItem title="LinkedIn" icon="linkedin" href="https://www.linkedin.com/in/colbygarland" />
      <ListItem title="GitHub" icon="github" href="https://github.com/colbygarland" />
      <ListItem title="Twitter" icon="twitter" href="https://twitter.com/xcolbyg" />
      <ListItem title="Spotify" icon="spotify" href="https://open.spotify.com/artist/5EvvtCzAShNJicGsRHTsA4" />
    </ul>
  );
};
