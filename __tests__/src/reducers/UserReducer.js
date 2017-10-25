/* eslint-env jest */
import reducer from '../../../src/reducers/UserReducer'
import { UPDATE_NAME, UPDATE_MENTOR_ROLE, UPDATE_MENTEE_ROLE, UPDATE_SKILL_NAME, UPDATE_SKILL_PROFICIENCY, UPDATE_SKILL } from '../../../src/actions/types'

const INITIAL_STATE = {
  name: '',
  roles: null,
  mentorSelected: false,
  menteeSelected: false,
  skill: {},
  skills: [],
};

test('user reducer should return intial state', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
})

test('user reducer should handle UPDATE_NAME', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_NAME, payload: 'test' })).toEqual({
    ...INITIAL_STATE,
    name: 'test'
  })
})

test('user reducer should handle UPDATE_MENTOR_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTOR_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    mentorSelected: true
  })
})

test('user reducer should handle UPDATE_MENTEE_ROLE', () => {
  expect(reducer(INITIAL_STATE, { type: UPDATE_MENTEE_ROLE, payload: true })).toEqual({
    ...INITIAL_STATE,
    menteeSelected: true
  })
})

test('user reducer should handle UPDATE_SKILL_NAME', () => {
  expect(
    reducer(INITIAL_STATE, { type: UPDATE_SKILL_NAME, payload: 'javascript' })
  ).toEqual({
    ...INITIAL_STATE,
    skill: { name: 'javascript' },
  });
});

test('user reducer should handle UPDATE_SKILL_PROFICIENCY', () => {
  expect(
    reducer(INITIAL_STATE, { type: UPDATE_SKILL_PROFICIENCY, payload: '4' })
  ).toEqual({
    ...INITIAL_STATE,
    skill: { proficiency: '4' },
  });
});

test('user reducer should handle UPDATE_SKILL', () => {
  const skill = { name: 'javascript', proficiency: '5'}
  expect(
    reducer(INITIAL_STATE, { type: UPDATE_SKILL, payload: skill })
  ).toEqual({
    ...INITIAL_STATE,
    skills: [skill],
  });
});
