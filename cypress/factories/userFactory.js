import { faker } from "@faker-js/faker"

export default function userFactory() {
  return {
    nickname: faker.name.firstName(),
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    password: "123",
    confirmPassword: "123"
  }
}
