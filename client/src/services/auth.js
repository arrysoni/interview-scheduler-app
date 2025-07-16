// For now, mock approval status
let candidateApprovalStatus = {};

export const setApprovalStatus = (candidateId, status) => {
  candidateApprovalStatus[candidateId] = status;
};

export const getApprovalStatus = (candidateId) => {
  return candidateApprovalStatus[candidateId] || 'pending';
};
