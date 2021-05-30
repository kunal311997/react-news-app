

export default function Category({ category, onCategoryClicked }) {

    return (
        <div
            onClick={() => { onCategoryClicked(category.id) }}
            className='category-item' style={{ background: category.isSelected ? '#267dff' : '#0a369d' }} >
            <p>{category.name}</p>
        </div>
    )
}