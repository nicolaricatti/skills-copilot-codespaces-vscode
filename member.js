function skillsMember() {
  return {
    name: 'skillsMember',
    type: new GraphQLList(SkillType),
    resolve: (member) => {
      return member.skills;
    }
  }
}