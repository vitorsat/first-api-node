import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
  async list(search) {
    let videos

    if (search) {
      videos = await sql`select * from videos where title like ${'%' + search + '%'}`
    } else {
      videos = await sql`select * from videos`
    }

    return videos
  }

  async create(video) {
    const videoId = randomUUID()
    const {title, description, url} = video

    await sql`
      insert into videos (
        id,
        title,
        description,
        url
      ) values (
        ${videoId},
        ${title},
        ${description},
        ${url}
      )
    `
  }

  async update(id, video) {
    const {title, description, url} = video

    await sql`update videos set title=${title}, description=${description}, url=${url} where id=${id}}`
  }

  async delete(id) {
    await sql`delete from videos where id=${id}`
  }
}