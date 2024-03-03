import Catalog from './Catalog'

/**
 * 悬浮抽屉目录
 * @param toc
 * @param post
 * @returns {JSX.Element}
 * @constructor
 */
const TocDrawer = ({ post, cRef }) => {
  return <>
    {/* <div id='gitbook-toc-float' className='fixed top-0 right-0 z-40 '> */}
    {/* 侧边菜单 */}
    <div
      className='max-xl:hidden rounded py-2 bg-white dark:bg-hexo-black-gray z-40'>
      {post && <>
        <div className='dark:text-gray-400 text-gray-600 sticky top-1/4 pl-20 h-96 p-3'>
          <Catalog post={post} />
        </div>
      </>}
    </div>
    {/* </div> */}
  </>
}
export default TocDrawer
