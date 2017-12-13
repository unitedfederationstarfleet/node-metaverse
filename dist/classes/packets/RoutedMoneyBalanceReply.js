"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID_1 = require("../UUID");
const IPAddress_1 = require("../IPAddress");
const MessageFlags_1 = require("../../enums/MessageFlags");
class RoutedMoneyBalanceReplyPacket {
    constructor() {
        this.name = 'RoutedMoneyBalanceReply';
        this.flags = MessageFlags_1.MessageFlags.Trusted | MessageFlags_1.MessageFlags.Zerocoded | MessageFlags_1.MessageFlags.Deprecated | MessageFlags_1.MessageFlags.FrequencyLow;
        this.id = 4294902075;
    }
    getSize() {
        return (this.MoneyData['Description'].length + 1) + (this.TransactionInfo['ItemDescription'].length + 1) + 93;
    }
    writeToBuffer(buf, pos) {
        const startPos = pos;
        this.TargetBlock['TargetIP'].writeToBuffer(buf, pos);
        pos += 4;
        buf.writeUInt16LE(this.TargetBlock['TargetPort'], pos);
        pos += 2;
        this.MoneyData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.MoneyData['TransactionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.MoneyData['TransactionSuccess']) ? 1 : 0, pos++);
        buf.writeInt32LE(this.MoneyData['MoneyBalance'], pos);
        pos += 4;
        buf.writeInt32LE(this.MoneyData['SquareMetersCredit'], pos);
        pos += 4;
        buf.writeInt32LE(this.MoneyData['SquareMetersCommitted'], pos);
        pos += 4;
        buf.write(this.MoneyData['Description'], pos);
        pos += this.MoneyData['Description'].length;
        buf.writeInt32LE(this.TransactionInfo['TransactionType'], pos);
        pos += 4;
        this.TransactionInfo['SourceID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.TransactionInfo['IsSourceGroup']) ? 1 : 0, pos++);
        this.TransactionInfo['DestID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.TransactionInfo['IsDestGroup']) ? 1 : 0, pos++);
        buf.writeInt32LE(this.TransactionInfo['Amount'], pos);
        pos += 4;
        buf.write(this.TransactionInfo['ItemDescription'], pos);
        pos += this.TransactionInfo['ItemDescription'].length;
        return pos - startPos;
    }
    readFromBuffer(buf, pos) {
        const startPos = pos;
        const newObjTargetBlock = {
            TargetIP: IPAddress_1.IPAddress.zero(),
            TargetPort: 0
        };
        newObjTargetBlock['TargetIP'] = new IPAddress_1.IPAddress(buf, pos);
        pos += 4;
        newObjTargetBlock['TargetPort'] = buf.readUInt16LE(pos);
        pos += 2;
        this.TargetBlock = newObjTargetBlock;
        const newObjMoneyData = {
            AgentID: UUID_1.UUID.zero(),
            TransactionID: UUID_1.UUID.zero(),
            TransactionSuccess: false,
            MoneyBalance: 0,
            SquareMetersCredit: 0,
            SquareMetersCommitted: 0,
            Description: ''
        };
        newObjMoneyData['AgentID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjMoneyData['TransactionID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjMoneyData['TransactionSuccess'] = (buf.readUInt8(pos++) === 1);
        newObjMoneyData['MoneyBalance'] = buf.readInt32LE(pos);
        pos += 4;
        newObjMoneyData['SquareMetersCredit'] = buf.readInt32LE(pos);
        pos += 4;
        newObjMoneyData['SquareMetersCommitted'] = buf.readInt32LE(pos);
        pos += 4;
        newObjMoneyData['Description'] = buf.toString('utf8', pos, length);
        pos += length;
        this.MoneyData = newObjMoneyData;
        const newObjTransactionInfo = {
            TransactionType: 0,
            SourceID: UUID_1.UUID.zero(),
            IsSourceGroup: false,
            DestID: UUID_1.UUID.zero(),
            IsDestGroup: false,
            Amount: 0,
            ItemDescription: ''
        };
        newObjTransactionInfo['TransactionType'] = buf.readInt32LE(pos);
        pos += 4;
        newObjTransactionInfo['SourceID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjTransactionInfo['IsSourceGroup'] = (buf.readUInt8(pos++) === 1);
        newObjTransactionInfo['DestID'] = new UUID_1.UUID(buf, pos);
        pos += 16;
        newObjTransactionInfo['IsDestGroup'] = (buf.readUInt8(pos++) === 1);
        newObjTransactionInfo['Amount'] = buf.readInt32LE(pos);
        pos += 4;
        newObjTransactionInfo['ItemDescription'] = buf.toString('utf8', pos, length);
        pos += length;
        this.TransactionInfo = newObjTransactionInfo;
        return pos - startPos;
    }
}
exports.RoutedMoneyBalanceReplyPacket = RoutedMoneyBalanceReplyPacket;
//# sourceMappingURL=RoutedMoneyBalanceReply.js.map