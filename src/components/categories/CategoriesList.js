import Category from './Category'

export default function CategoriesList({ categoriesList, onCategoryClicked }) {
    return (
        <div className='categories-main'>
            {categoriesList.map((category, index) => (
                <Category
                    key={index}
                    category={category}
                    onCategoryClicked={onCategoryClicked} />
            ))}
        </div>
    )
}