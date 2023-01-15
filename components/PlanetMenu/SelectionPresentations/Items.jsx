import { motion } from "framer-motion";

const Item = ({ itemTitle, font, enableContentViewer }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    hovered: { x: [0, 2, 4, 6, 8, 6, 4, 2, 0], y: [0, -1, 0, 1, 0, -1, 0, 1, 0], color: '#FD8', transition: {repeat: Infinity} }
  };

  return (
    <motion.div variants={item} itemTitle={itemTitle}
    style={{
      color: 'white', 
      fontFamily: font,
      fontSize: '1.7rem',
      padding: '1rem',
      textShadow: '0rem 0rem 1rem black, 0rem 0rem 1rem black, 0rem 0rem 1rem black, 0rem 0rem 1rem black',
      cursor: 'pointer',
      textAlign: 'center',
    }}
    whileHover={{ y: -3, color: '#FD8'}}
    whileTap={{ scale: 1.1, color: '#FD8' }}
    onClick={() => enableContentViewer(itemTitle, 'content')}
    >
      {itemTitle}
      <div style={{ width: '100%', height: '100%', top: 0, left: 0}} />
    </motion.div>
  );
};

const Items = ({itemTitles, font, url, enableContentViewer}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div style={{
        width: "100%",
        marginTop: "5%",
        minHeight: "80%",
        display: "flex",
        flexWrap: "wrap",
        verticalAlign: "center",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: 'center',
      }}
      variants={container} initial="hidden" animate="show">
      {itemTitles &&
        itemTitles.map((itemTitle) => (
          <Item key={itemTitle} itemTitle={itemTitle} font={font} url={url} enableContentViewer={enableContentViewer}>
            {itemTitle}
          </Item>
        ))}
    </motion.div>
  );
};

export default Items;
