export const ListItems = (ListItem) => (props) => {
  const { posts = [], posts_type } = props.block.attrs;
  
  return (posts && posts.length) && (
    <ul className={ `clearfix ${posts_type}` }>
      { posts.map((item, index) => <ListItem { ...props } key={ index } index={ index } item={ item } />) }
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          
        }
      `}</style>
      <style jsx global>{`
        ul.building {
          display: flex;
          flex-wrap: wrap;
        }
        ul.building li {
          flex: 0 0 100%;
        }
        @media (min-width: 768px) {
          ul.building li {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          ul.building li {
            flex: 0 0 33.3333%;
          }
        }
      `}</style>
      
    </ul>
  ) 
}