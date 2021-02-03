export default interface Service {
    getAll()
    get(id)
    create(data)
    update(old, data)
    remove(id)
}