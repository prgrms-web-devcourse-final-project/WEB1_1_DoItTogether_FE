export const INPUT_VALIDATION = {
  roomName: {
    maxLength: 7,
    regexp: /^[가-힣a-zA-Z0-9\s]+$/,
    errorMessage: '한글, 영문, 숫자만 입력 가능하며 최대 7자까지 입력할 수 있어요',
  },
  nickname: {
    maxLength: 5,
    regexp: /^[가-힣a-zA-Z0-9\s]+$/,
    errorMessage: '한글, 영문, 숫자만 입력 가능하며 최대 5자까지 입력할 수 있어요',
  },
  preset: {
    maxLength: 13,
    regexp: /^[가-힣a-zA-Z0-9\s]+$/,
    errorMessage: '한글, 영문, 숫자만 입력 가능하며 최대 13자까지 입력할 수 있어요',
  },
};
